import { NextResponse } from "next/server";

interface ClassificationResult {
  label: string;
  score: number;
}

const HUGGING_FACE_API_URL = "https://api-inference.huggingface.co/models/mrm8488/bert-tiny-finetuned-spam-detection";

export async function POST(req: Request) {
  try {
    if (!process.env.HUGGINGFACE_API_KEY) {
      throw new Error("HUGGINGFACE_API_KEY is not set");
    }

    const { text } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: "Text content is required" },
        { status: 400 }
      );
    }

    // Clean and normalize the text for better classification
    const cleanText = text
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/[^\w\s@.]/g, '') // Remove special characters except @ and .
      .trim();

    const response = await fetch(HUGGING_FACE_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        inputs: cleanText,
        options: {
          wait_for_model: true,
          use_cache: true
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`HuggingFace API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    const classification = data[0] as ClassificationResult[];
    const isSpam = classification[0].label === "spam";
    const confidence = Math.max(...classification.map((c) => c.score)) * 100;

    return NextResponse.json({
      isSpam,
      confidence: confidence.toFixed(1),
      classification,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to classify text";
    console.error("Spam classification error:", errorMessage);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}