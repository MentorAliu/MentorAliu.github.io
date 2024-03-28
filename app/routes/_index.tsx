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
      <main className="flex h-[calc(100vh-65px)] bg-[url('assets/hero_photo.jpg')] bg-center bg-no-repeat bg-cover">
        <article className="md:flex sm-14 justify-between mt-52 mx-auto w-[1024px] px-5">
          <div>
            <div>
              <p className="text-emerald-500 font-mono font-semibold text-large">
                Hi, my name is
              </p>
              <h1>Mentor</h1>
              <h1 className="ml-20 mt-2">Aliu</h1>
            </div>
            <div>
              <p className="font-mono font-semibold text-xl mt-4">
                Frontend Engineer
              </p>
              <p className="mt-2 w-80">
                I specialize in building high-quality applications with a focus
                on performance and accessibility.
              </p>
            </div>
          </div>
          <div className="sm:mt-12">right side</div>
        </article>
      </main>
      <div>hello world</div>
    </>
  )
}
