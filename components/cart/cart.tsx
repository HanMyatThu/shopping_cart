import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CartProps {
  open: boolean
  handleClose: () => void
}

export const Cart = ({
  open,
  handleClose
}: CartProps) => {

  return (
    <Drawer open={open} direction="right">
      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 md:w-[500px] sm:w-[400px] rounded-none">
        <DrawerHeader>
          <DrawerTitle className="font-sans font-semibold">
            Shopping Cart
          </DrawerTitle>
          <DrawerDescription>You have 2 items inside your cart.</DrawerDescription>
          <div className="absolute top-10 right-10 cursor-pointer" onClick={handleClose}>
            <X />
          </div>
          <Separator />
          <ScrollArea className="mt-8">
            
          </ScrollArea>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="default">Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}