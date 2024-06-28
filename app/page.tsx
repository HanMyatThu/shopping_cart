'use client';

import { CartProvider } from "@/contexts/cartProvider"
import { data } from "@/data/data"
import { ItemInterface } from "@/interfaces/item-interface"

import { ItemListCarousel } from "@/components/items/item-list-carousel"
import { Navigation } from "@/components/navigations"

const App = () => {

  const bestSelection = data.filter((data: ItemInterface) => data.bestSelection)
  const otherProducts = data.filter((data: ItemInterface) => !data.bestSelection)

  return (
    <div>
      <Navigation />
      <ItemListCarousel title="Best Selections" items={bestSelection}/>

      {/* All Products */}
      <ItemListCarousel title="All Products" items={data}/>
    </div>
  )
}


export default App