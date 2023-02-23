import Link from "next/link";
export default function Page() {
  return (
    <div className="bg-gray-50 p-10">
      <div className="mb-10">
        <button className="p-10 mx-10 shadow=sm bg-white">One</button>
        <button className="p-10 mx-0 shadow-sm bg-white">Two</button>
        <button className="p-10 mx-10 shadow-lg bg-white">Three</button>
      </div>
      <div>
        <button className="p-10 mx-10 shadow-xl bg-white">Four</button>
        <button className="p-10 mx-10 shadow-2xl bg-white">Five</button>
        <button className="p-10 mx-10 shadow-inner bg-white">Six</button>
      </div>
      <div className="flex justify-center bg-sky-700">
        <button className="mr-10 my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200 bg-blue-900">
          <Link href="/">Home</Link>
        </button>
        <button className="mr-10 my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200 bg-blue-900">
          <Link href="/hello_world">Hello World</Link>
        </button>
        <button className="mr-10 my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200 bg-blue-900">
          <Link href="/ring">Ring</Link>
        </button>
        <button className="my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200 bg-blue-900">
          <Link href="/gradients">Gradients</Link>
        </button>
      </div>
    </div>
  );
}
