import { Button, Card, CardFooter, Image } from "@nextui-org/react"
import image from "../assets/hero_photo.webp"

export const Projects = () => {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
  ]

  return (
    <article className="flex px-8">
      <div className="flex flex-wrap mx-auto w-[1024px] gap-6 justify-center">
        {list.map((item, index) => (
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none md:w-[calc(100%/2-20px)] w-full"
            key={index}
          >
            <Image
              alt="Woman listing to music"
              isZoomed
              className="object-cover"
              src={image}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">{item.title}</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Visit
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </article>
  )
}
