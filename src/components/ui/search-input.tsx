'use client'
import { Input } from '@nextui-org/react'
import { useSearchParams } from 'next/navigation'
import { Search } from '@/actions'

export default function SearchInput() {
  const searchParams = useSearchParams()

  return (
    <form action={Search}>
      <Input name='term' defaultValue={searchParams.get('term') || ''} />
    </form>
  )
}
