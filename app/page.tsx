export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center bg-linear-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent mb-8">
          ようこそ BeetleKeys へ
        </h1>
        <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
          はじめる
        </button>
        <button className="ml-4 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
          ドキュメント
        </button>
        <div className="mt-10 text-center text-gray-600">
          BeetleKeys は、効率的でカスタマイズ可能なキーボードショートカット管理ツールです。
        </div>
      </div>
    </main>
  )
}
