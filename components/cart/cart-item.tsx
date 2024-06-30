"use client"
import Image from "next/image"

import { MinusSquare, PlusSquare, Trash2Icon } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface CartItemProps {
  item: {
    id: string,
    title: string,
    price: number,
    quantity: number,
    imageUrl: string,
  },
  updateCartItem: (id: string, quantity: number) => void,
  removeCartItem: (id: string) => void,
}

export const CartItem = ({
  item,
  updateCartItem,
  removeCartItem
}: CartItemProps) => {

  const handleCartQuantity = (type: 0 | 1) => {
    // let 0 is -
    if (item.quantity === 1 && type === 0 ) return null
    if (type === 0) {
      updateCartItem(item.id, item.quantity - 1)
    } else {
      updateCartItem(item.id, item.quantity + 1)
    }
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-3">
        <div>
          <Image 
            src={item.imageUrl}
            alt={`shopping-item-${item.id}`}
            width={120}
            height={120}
          />
        </div>
        <div className="flex flex-row justify-between col-span-2">
          <div>
            <div className="text-sm font-semibold font-mono">
              {item.title}
            </div>
            <div className="text-xs text-muted-foreground">
              Size - 7
            </div>
          </div>
          <div className="flex flex-row gap-x-2 text-left justify-left">
            <MinusSquare className="size-4 mt-1" onClick={() => handleCartQuantity(0)} />
            <div>
              {item.quantity}
            </div>
            <PlusSquare className="size-4 mt-1" onClick={() => handleCartQuantity(1)}/>
          </div>
          <div>
            <div className="text-sm text-card-foreground">
              {`$ ${Number(item.quantity * item.price)}`}
            </div>
            <div
              onClick={() => removeCartItem(item.id)}
              className="absolute bottom-5 right-0 text-xs text-red-600 flex flex-row gap-x-1 cursor-pointer"
            >
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