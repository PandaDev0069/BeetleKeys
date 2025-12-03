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
    {/* Login section */}
    <section className ="bg-white text-black rounded-xl p-8 shadow-md w-100">
        <h2 className="mb-4 text-red-500 text-4xl text-center font-bold">ログイン</h2>
        {error && (
            <p className="mb-4 text-red-500 text-center font-semibold">
            {error}</p>)}
        <form onSubmit={handlesubmit} className="flex flex-col">
            <input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="p-3 mb-4 border rounded"
            required
            />
            <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="p-3 mb-6 border rounded"
            required
            />
            <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:opacity-50 "
        >
            {loading ? "ログイン中...":"ログイン"}
            </button>
           </form>
            <div className="text-center">
            アカウントをお持ちでないですか？{" "}
            <a
              href="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              新規登録
            </a>
            </div>
          </section>
          
    {/* Footer */}

    <footer className="mt-auto pt-20 text-center text-sm text-gray-300">
      <p>&copy; {new Date().getFullYear()} BeetleKeys. All rights reserved.</p>
      <a 
      href="https://github.com/PandaDev0069/BeetleKeys" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-300 hover:text-blue-100 underline"
      >
      View on GitHub
      </a>
    </footer>
    </main>
  );
}