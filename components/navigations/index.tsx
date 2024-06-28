import { CustomToolTip } from "@/components/common/custom-tooltip"
import { ThemeChanger } from "@/components/common/theme-changer"
import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"


export const Navigation = () => {
  return (
    <nav className="bg-cyan-900 border-cyan-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://www.drazcoding.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-100 dark:text-white">Draz Coding</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 
          rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 
          md:bg-cyan-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
          ">
            <ThemeChanger />
            <Button
              className="bg-cyan-900 border-cyan-950 hover:bg-cyan-800 hover:border-cyan-900"
              variant="ghost"
            >
              <ShoppingCart className="h-4 w-4"/>
            </Button>
          </div>
        </div>
      </div>
    </nav>

  )
}
