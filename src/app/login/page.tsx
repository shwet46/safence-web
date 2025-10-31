import OAuthLogin from "@/components/OAuthLogin";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome to Safence</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Secure your inbox with advanced spam detection
          </p>
        </div>
        <OAuthLogin />
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          By signing in, you agree to our{" "}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
