import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">

      <h1>Mobile Edit Pro</h1>

      <p>
        Professional online video editor.
      </p>

      <Link href="/editor">
        <button>Open Editor</button>
      </Link>

    </main>
  );
}