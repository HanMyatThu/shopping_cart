"use client"

import * as React from "react"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Star } from "lucide-react"

interface ItemProps {
  title: string
  imageUrl: string
  description: string
  rating: 0 | 1 | 2 | 3 | 4 | 5
  price: number
  onClick: () => void
}

export const Item = ({
  title,
  imageUrl,
  description,
  rating = 0.0,
  price = 0,
}: ItemProps) => {

  const ratings = [1,2,3,4,5]

  return (
    <Card className="min-h-[580px] group group-hover:shadow-lg transition">
      <CardHeader className="flex flex-col gap-y-4">
        <CardTitle>{title}</CardTitle>
        <Separator />
        <div className="items-center justify-center">
          <Image
            src={imageUrl}
            alt={title}
            width={260}
            height={260}
          />
        </div>
      </CardHeader>
      <CardContent className="mt-4">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {description}
        </p>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div>{`Rating: `}</div>
            {ratings.map((rate:number) => (
              (rate <= rating && rating !== 0)
              ? <Star fill="orange" color="orange" className="h3 w-3" key={rating}/>
              : <Star color="orange" className="h3 w-3" key={rating}/>
            ))}
          </div>
          <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}
          </div>
        </div>
        <Separator />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {`$ ${price}`}
        </div>
        <Button variant="secondary">
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

