"use client"

import { Separator } from "@/components/ui/separator"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Item } from "./item"
import { ItemInterface } from "@/interfaces/item-interface"

interface ItemListCarouselProps {
  title: string
  items: ItemInterface[]
}

export const ItemListCarousel = ({
  title,
  items,
}: ItemListCarouselProps) => {
  return (
    <div className="mt-12 px-12 py-4 bg-gray-100 dark:bg-[#020512] dark:opacity-90">
      <div className="max-w-fit">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold font-mono tracking-tight first:mt-0 dark:font-semibold">
          {title}
        </h2>
        <Separator />
      </div>
      <div className="w-full mt-10 px-10">
        <Carousel>
          <CarouselContent>
              {items.map((item:ItemInterface) => (
                <CarouselItem 
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Item 
                    description={item.description}
                    imageUrl={item.imageUrl}
                    price={item.price}
                    rating={item.rating}
                    title={item.title}
                    onClick={() => {}}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="bg-cyan-950 text-white hover:bg-cyan-900 hover:text-neutral-200" />
          <CarouselNext className="bg-cyan-950 text-white hover:bg-cyan-900 hover:text-neutral-200" />
        </Carousel>
      </div>
    </div>
  )
}