import { Button } from "@nextui-org/react"

export const Hero = () => {
  return (
    <main className="flex h-[calc(100vh-65px)]">
      <article className="md:flex sm-14 justify-between mt-96 mx-auto w-[1024px] px-5">
        <div>
          <div>
            <p className="text-emerald-500 font-mono font-semibold text-large">
              Hi, my name is
            </p>
            <h1>Mentor</h1>
            <h1 className="ml-20 mt-4">Aliu</h1>
          </div>
          <div>
            <p className="font-mono font-semibold text-xl mt-4">
              Frontend Engineer
            </p>
            <p className="mt-4 w-96 text-gray-300">
              I specialize in building high-quality applications with a focus on
              performance and accessibility.
            </p>
          </div>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-blue-600 to-green-600 text-white shadow-lg mt-6"
          >
            Download CV
          </Button>
        </div>
      </article>
    </main>
  )
}
