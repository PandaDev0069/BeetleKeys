export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10 items-center bg-gradient-to-br from-blue-600 to-green-700 text-white">
      <section className="text-center justify-center">
      <div className="w-full items-center justify-center mb-20">
          <img src="/BeetleKeys.png" alt="BeetleKeys logo" width={250} height={250} />
      </div>
    </section>
    <section className="text-center mt-1">
      <div className="text-4xl text-[#00bfff] mb-6">
        ログイン画面に進む
      </div>
      <div className="text-4xl font-bold">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Login
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
