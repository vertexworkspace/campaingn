// app/page.tsx   ← this file
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; // optional, but safe

export default function HomePage() {
  // This runs on the server → Google sees proper HTML + all <head> tags
  redirect("/vertex-solutions");
}