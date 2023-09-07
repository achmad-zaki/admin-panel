import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link href="/dashboard" className="bg-primary px-3 py-2">login</Link>
    </div>
  )
}
