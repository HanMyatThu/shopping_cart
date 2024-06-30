"use client"

import { useState } from "react"


export const useCheckout = () => {

  const [response, setResponse] = useState<null | {message: string}>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  function delay() {
    return new Promise(resolve => setTimeout(resolve, 3000, null));
  }

  const checkout = async (data: any) => {
    setLoading(true)
    try {
      await delay()
      setResponse({
        message: "Your Order is success. Thank you for shopping with us."
      })
      setSuccess(true)
      setLoading(true)
    } catch (e) {
      setResponse(null)
      setSuccess(false)
    } finally {
      setLoading(false)
    }
  }

  return {
    checkout,
    response,
    success,
    loading,
  }
}