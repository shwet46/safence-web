"use client";

import { useState, useEffect } from "react";

interface SpamClassification {
  isSpam: boolean;
  confidence: string;
}

interface EmailItemProps {
  id: string;
  subject: string;
  from: string;
  snippet: string;
  date: string;
  threadId: string;
  body?: string;
  isExpanded?: boolean;
  onToggleExpand?: (id: string) => void;
}

export function EmailItem({ 
  id,
  subject, 
  from, 
  snippet, 
  date, 
  body, 
  isExpanded = false,
  onToggleExpand 
}: EmailItemProps) {
  const [spamClass, setSpamClass] = useState<SpamClassification | null>(null);
  const [isClassifying, setIsClassifying] = useState(false);

  useEffect(() => {
    const classifyEmail = async () => {
      if (!isExpanded || spamClass) return;
      
      setIsClassifying(true);
      try {
        // Prepare a structured analysis of the email
        const emailData = {
          subject,
          from: from.split("<")[0].trim(),
          content: body || snippet,
          fullText: `Title: ${subject}\nFrom: ${from}\n\nContent: ${body || snippet}`
        };

        const response = await fetch("/api/classify-spam", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: emailData.fullText }),
        });

        if (!response.ok) throw new Error("Classification failed");
        const data = await response.json();
        setSpamClass(data);
      } catch (error) {
        console.error("Failed to classify email:", error);
      } finally {
        setIsClassifying(false);
      }
    };

    classifyEmail();
  }, [isExpanded, subject, snippet, body, spamClass, from]);
  return (
    <div 
      className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors cursor-pointer border-b border-gray-100 dark:border-zinc-800"
      onClick={() => onToggleExpand?.(id)}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {isClassifying ? (
              <div className="animate-pulse h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
            ) : spamClass && spamClass.isSpam && (
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 uppercase tracking-wider">
                Spam
              </span>
            )}
            <h3 className="text-base font-medium text-gray-900 dark:text-white truncate">
              {subject}
            </h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {from.split("<")[0].trim()}
          </p>
          <time className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {new Date(date).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
        
        <div className="flex items-center gap-2">
          {!isClassifying && spamClass && !spamClass.isSpam && (
            <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
              Safe ({spamClass.confidence}%)
            </span>
          )}
      </div>

      <div className={`mt-1 transition-all duration-200 ${isExpanded ? 'max-h-96' : 'max-h-6'} overflow-hidden`}>
        {isExpanded && body ? (
          <div className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
            {body}
          </div>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {snippet}
          </p>
        )}
      </div>
      
      {onToggleExpand && (
        <button 
          className="mt-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          {isExpanded ? "Less" : "More"}
        </button>
      )}
    </div>
  </div>
  );
}