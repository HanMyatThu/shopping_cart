"use client"

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Loader2, X } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCartContext } from "@/contexts/cartProvider"
import { CartItem } from "./cart-item"
import { useCheckout } from "@/hooks/useCheckout"
import { useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
interface CartProps {
  open: boolean
  handleClose: () => void
}

export const Cart = ({
  open,
  handleClose
}: CartProps) => {

  const {
    items,
    updateCartItem, 
    removeCartItem,
    clearCartItem,
    getTotalPrice,
  } = useCartContext()

  //mock api hook
  const { success, response, loading, checkout } = useCheckout()

  const { toast } = useToast()

  useEffect(() => {
    if (success && response?.message) {
      clearCartItem()
      handleClose()
      toast({
        variant: "success",
        title: "Order Success",
        description: response?.message,
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, response])

  return (
    <Drawer open={open} direction="right" onClose={handleClose}>
      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 md:w-[550px] sm:w-[450px] rounded-none">
        <DrawerHeader>
          <DrawerTitle className="font-sans font-semibold">
            Shopping Cart
          </DrawerTitle>
          <DrawerDescription>You have { items.length } items inside your cart.</DrawerDescription>
          <div className="absolute top-10 right-2 cursor-pointer" onClick={handleClose}>
            <X />
          </div>
          <Separator />
          <ScrollArea className="mt-8 h-[500px]">
            {
              items.length
              ? <> {items.map(item => {
                  return (
                    <CartItem 
                      item={item}
                      updateCartItem={updateCartItem}
                      removeCartItem={removeCartItem}
                      key={`cart-item-${item.id}`}
                    />
                  )
                })} 
                
                </>
              : <div className="text-lg font-mono h-full mx-auto text-center justify-center cursor-pointer" onClick={handleClose}>
                  Go To Shopping
                </div>
            }
          </ScrollArea>
        </DrawerHeader>
        <DrawerFooter className="fixed bottom-0 w-full">
          <div className="mt-5 text-right justify-end">
            <div className="text-sm font-mono">
              Total Price - {`$ ${getTotalPrice()}`}
            </div>
          </div>
          <Button
            onClick={() => checkout(items)}
            variant="default"
            disabled={loading || !items.length}
          >
            Checkout
            {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}