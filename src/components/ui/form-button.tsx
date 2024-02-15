'use client'
import { useFormStatus } from "react-dom"
import { Button } from "@nextui-org/react"
import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
}
export default function FormButton({ children }: ButtonProps) {
  const { pending } = useFormStatus()
  return (
    <Button type='submit' isLoading={pending}>{children}</Button>
  )
}
