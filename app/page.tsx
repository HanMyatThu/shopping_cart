'use client';

import { useState } from "react";
import { data } from "@/data/data"
import { ItemInterface } from "@/interfaces/item-interface"

import { ItemListCarousel } from "@/components/items/item-list-carousel"
import { Navigation } from "@/components/navigations"
import { Cart } from "@/components/cart/cart";

const App = () => {

  const bestSelection = data.filter((data: ItemInterface) => data.bestSelection)
  const otherProducts = data.filter((data: ItemInterface) => !data.bestSelection)

  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div>
      <Navigation onClickCart={() => setCartOpen(true)} />
      <Cart open={cartOpen} handleClose={() => setCartOpen(false)} />
      <ItemListCarousel title="Best Selections" items={bestSelection}/>

      {/* All Products */}
      <ItemListCarousel title="All Products" items={otherProducts}/>
    </div>
  )
}


export default App