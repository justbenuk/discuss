'use client'
import { NextUIProvider } from "@nextui-org/react"
import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

type ProvidersChildren = {
  children: ReactNode
}
export default function Providers({ children }: ProvidersChildren) {
  return (
    <SessionProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </SessionProvider>
  )
}
