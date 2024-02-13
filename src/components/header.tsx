import Link from "next/link"
import { Navbar, NavbarBrand, NavbarItem, NavbarContent, Input, Button, Avatar } from "@nextui-org/react"
import { auth } from "@/auth"
export default async function Header() {
  //check if a user is signed in
  const session = await auth()
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
        <NavbarItem>
          {session?.user ? (
            <p>profile</p>
          ) : (
            <p>login</p>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
