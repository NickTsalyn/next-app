import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3x1">We Hit a Brick Wall.</h2>
      <p>We could not find page you were looking for.</p>
      <p>
        Go back to the <Link href="/tickets">Dashboard</Link>
      </p>
    </main>
  );
}
