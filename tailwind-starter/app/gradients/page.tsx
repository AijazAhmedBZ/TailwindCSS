import Link from "next/link";
export default function Page() {
  return (
    <div>
      <div className="mb-10 bg-gradient-to-r from-gray-50 to-black p-10 w-1/2">
        <button className="p-10 mx-10 bg-white">One</button>
        <button className="p-10 mx-10 bg-white">Two</button>
      </div>
      <div
        className="mb-10 p-10 w-1/2
          bg-gradient-to-r from-gray-50 via-black to-gray-50"
      >
        <button className="p-10 mx-10 bg-white">Three</button>
        <button className="p-10 mx-10 bg-white">Four</button>
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
          <Link href="/shadows">Shadows</Link>
        </button>
      </div>
    </div>
  );
}
