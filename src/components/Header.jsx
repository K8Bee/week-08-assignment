// Header component
import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/* <h4>Three Pines Blog - book discussions at the Bistro</h4> */}
      {/* This is the header - adding some navigation */}
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </div>
  );
}
