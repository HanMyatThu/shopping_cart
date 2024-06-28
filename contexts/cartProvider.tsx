import React, { createContext, useContext, useState } from "react";

import { ItemInterface } from "@/interfaces/item-interface";

interface CartItemProps {
  id: string,
  title: string,
  price: number,
  quantity: number,
}

interface CartContextProps {
  items: CartItemProps[],
  addCartItem: (id: ItemInterface) => void
  removeCartItem: (id: string) => void
  updateCartItem: (id: string) => void
  clearCartItem: () => void
}

interface CartProviderProps {
  children: React.ReactNode
}

const CartContext = createContext<CartContextProps | undefined>(undefined)


export const CartProvider = ({
  children
}: CartProviderProps) => {

  const [items, setItems] = useState<CartItemProps[]>([])

  const addCartItem = (item: ItemInterface) => {
    const isItemExisted = items.filter((i) => i.id === item.id)
    if (isItemExisted.length) {
      const updatedItems = items.map((i: CartItemProps) => i.id === item.id ? {...i, quantity: i.quantity += 1 }: {...i})
      setItems(updatedItems)
    } else {
      const newItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: 1,
      } satisfies CartItemProps
      const updatedItems = [...items, newItem]
      console.log(updatedItems,'update')
      setItems(updatedItems)
    }
  }

  const removeCartItem = (id: string) => {
    const filteredItems = items.filter((i) => i.id !== id)
    setItems(filteredItems)
  }

  const updateCartItem = (id: string) => {
    const updatedItems = items.map((i: CartItemProps) => i.id === id ? {...i, quantity: i.quantity += 1 }: {...i})
    setItems(updatedItems)
  }

  const clearCartItem = () => {
    setItems([])
  }

  const value = {
    items,
    addCartItem,
    removeCartItem,
    clearCartItem,
    updateCartItem,
  }

  console.log(items,'items')

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("UseCartContext must be used inside CartProvider")
  }
  return context;
}