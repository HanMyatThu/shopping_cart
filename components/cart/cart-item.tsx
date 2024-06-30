import Image from "next/image"

import { MinusSquare, PlusSquare, Trash2Icon } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const CartItem = () => {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div>
          <Image 
            src="/images/shoe1.jpg"
            alt="shopping-item-1"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-row justify-between col-span-2">
          <div>
            <div className="text-md font-semibold font-mono">
              Apple Juice
            </div>
            <div className="text-xs text-muted-foreground">
              Size - 7
            </div>
          </div>
          <div className="flex flex-row gap-x-2 text-center justify-center">
            <PlusSquare className="size-4 mt-1"/>
            <div>
              1
            </div>
            <MinusSquare className="size-4 mt-1" />
          </div>
          <div>
            <p className="text-sm text-card-foreground">$2.09</p>
            <div className="absolute bottom-5 right-0 text-xs text-red-600 flex flex-row gap-x-1">
              Remove
              <Trash2Icon className="size-3 mt-0.5" />
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-3" />
    </div>
  )
}