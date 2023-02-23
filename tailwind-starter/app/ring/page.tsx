import Link from "next/link";
export default function Page() {
  return (
    <div>
      <button className="m-4 p-4 rounded-md ring">Four</button>
      <button className="m-4 p-4 rounded-2xl ring-2">Five</button>
      <button className="m-4 p-4 rounded-full ring-4 ring-offset-4 ring-offset-black">
        Six
      </button>
      <div className="flex justify-center bg-sky-700">
        <button className="mr-10 my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200 bg-blue-900">
          <Link href="/">Home</Link>
        </button>
        <button className="mr-10 my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200 bg-blue-900">
          <Link href="/hello_world">Hello World</Link>
        </button>
        <button className="mr-10 my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200 bg-blue-900">
          <Link href="/gradients">Gradients</Link>
        </button>
        <button className="my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200 bg-blue-900">
          <Link href="/shadows">Shadows</Link>
        </button>
      </div>
    </div>
  );
}
