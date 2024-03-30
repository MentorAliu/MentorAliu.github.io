import type { MetaFunction } from "@remix-run/node"
import { Header, Hero, Projects } from "~/components"

export const meta: MetaFunction = () => {
  return [
    { title: "Mentori's Portfolio" },
    { name: "description", content: "Welcome to my portfolio!" },
  ]
}

export default function Index() {
  return (
    <>
      <Header />
      {/* <main className="flex h-[calc(100vh-65px)] bg-[url('assets/hero_photo.jpg')] bg-center bg-no-repeat bg-cover relative"> */}
      <Hero />
      <Projects />
    </>
  )
}
