import type { MetaFunction } from "@remix-run/node"
import { Header } from "~/components"

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
      <main className="flex h-screen">
        <article className="mt-52 mx-auto w-[1024px] px-5">
          <div>
            <p className="text-emerald-700 font-mono font-semibold text-large">
              Hi, my name is
            </p>
            <h1>Mentor</h1>
            <h1 className="ml-20 mt-2">Aliu</h1>
          </div>
          <div></div>
        </article>
      </main>
    </>
  )
}
