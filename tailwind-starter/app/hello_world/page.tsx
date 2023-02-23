import Link from "next/link";
export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Aoa, Next.js from Aijaz Ahmed!
      </h1>
      <div className="flex justify-center bg-sky-700">
        <button className="mr-10 my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200 bg-blue-900">
          <Link href="/">Home</Link>
        </button>
        <button className="mr-10 my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200 bg-blue-900">
          <Link href="/ring">Ring</Link>
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
