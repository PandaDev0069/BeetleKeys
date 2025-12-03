/* 
This is the login page for the authentication module.
Last edited: 2025/12/03
 */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    // Basic validation
    if (!email || !password) {
      setLoading(false);
      setError("全てを入力してください");
      return;
    }

    try {
      // Simulate API call
      const response = await fetch("/api/auth/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "ログイン失敗しました");
      }

      // On success, redirect to dashboard
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "ログイン中にエラーが発生しました");
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-10 items-center bg-gradient-to-br from-blue-600 to-green-700 text-white">
      {/* Header */}
      <section className="text-center justify-center">
      <div className="w-full items-center justify-center mb-20">
          <img src="/BeetleKeys.png" alt="BeetleKeys logo" width={250} height={250} />
      </div>
    </section>
    {/* Footer */}
    <footer className="mt-auto pt-20 text-center text-sm text-gray-600">
      <p>&copy; {new Date().getFullYear()} BeetleKeys. All rights reserved.</p>
      <a 
      href="https://github.com/PandaDev0069/BeetleKeys" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 underline"
      >
      View on GitHub
      </a>
    </footer>
    </main>
  );
}