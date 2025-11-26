export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-20">
      <section className="text-left">
      <div className="w-full items-center font-mono text-sm">
        <div className="text-red-900">BeetleKeys Logo</div>
        <h1 className="text-5xl font-bold  bg-linear-to-r from-red-400 to-amber-500 bg-clip-text text-transparent mb-8">
          BeetleKeys
        </h1>
      </div>
    </section>
    <section className="text-center mt-40">
      <div className="text-4xl font-bold">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
        <button className="ml-6 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Sign Up
        </button>
      </div>
    </section>
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
  )
}
