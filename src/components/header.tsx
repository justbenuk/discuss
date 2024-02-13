import Link from "next/link"
import { Navbar, NavbarBrand, NavbarItem, NavbarContent, Input, Button, Avatar, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react"
import { auth } from "@/auth"
import { ReactNode } from "react"
import * as actions from '@/actions'

export default async function Header() {
  //check if a user is signed in
  const session = await auth()

  //if user is logged in
  let authContent: ReactNode
  if (session?.user) {
    authContent = <>
      <Popover placement='left'>
        <PopoverTrigger>
          <Avatar src={session.user.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.SignOut}>
              <Button type='submit'>Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </>
  } else {
    authContent = <>
      <NavbarItem>
        <form action={actions.SignIn}>
          <Button type='submit' color='secondary' variant='bordered'>Sign In</Button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form action={actions.SignIn}>
          <Button type='submit' color='primary' variant='flat'>Sign Up</Button>
        </form>
      </NavbarItem>
    </>
  }

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href='/' className="font-bold">Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        {authContent}
      </NavbarContent>
    </Navbar>
  )
}
