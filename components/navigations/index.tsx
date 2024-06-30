"use client"
import { useCartContext } from "@/contexts/cartProvider"


import { ThemeChanger } from "@/components/common/theme-changer"
import { Button } from "@/components/ui/button"
import { MenuIcon, ShoppingCart } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavigationProps {
  onClickCart: () => void
}

export const Navigation = ({
  onClickCart
}: NavigationProps) => {
  const { items } = useCartContext()


  return (
    <nav className="bg-cyan-900 border-cyan-200 dark:bg-gray-900">
      <div className="w-full flex flex-wrap items-center justify-between p-4">
        <a href="https://www.drazcoding.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-100 dark:text-white">Draz Coding</span>
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <MenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 md:hidden">
            <DropdownMenuLabel className="text-right flex space-x-2 justify-end">
              <div className="mt-2">Theme Changer</div> <ThemeChanger />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="text-right flex space-x-2 justify-end">
              <div className="mt-2">Theme Changer</div>
              <Button
                onClick={onClickCart}
                className="bg-cyan-900 border-cyan-950 hover:bg-cyan-800 hover:border-cyan-900"
                variant="ghost"
              >
                <ShoppingCart className="h-5 w-5"/>
                {
                  items.length
                  ? (<div className="h-4 w-4 text-xs bg-orange-700 rounded-lg text-white mb-2">
                      {items.length}
                    </div>)
                  : null
                }
              </Button>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 
          rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 
          md:bg-cyan-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
          ">
            <ThemeChanger />
            <Button
              onClick={onClickCart}
              className="bg-cyan-900 border-cyan-950 hover:bg-cyan-800 hover:border-cyan-900"
              variant="ghost"
            >
              <ShoppingCart className="h-5 w-5"/>
              {
                items.length
                ? (<div className="h-4 w-4 text-xs bg-orange-700 rounded-lg text-white mb-2">
                    {items.length}
                  </div>)
                : null
              }
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
