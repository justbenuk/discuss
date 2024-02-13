import { Button } from "@nextui-org/react";
import { auth } from "@/auth";
import Profile from "@/components/profile";
import { SignIn, SignOut } from "@/actions";
export default async function Home() {
  const session = await auth()

  return (
    <div>
      <form action={SignIn}>
        <Button type='submit'>Sign In</Button>
      </form>
      <form action={SignOut}>
        <Button type='submit'>Sign Out</Button>
      </form>

      {session?.user ? <div>{JSON.stringify(session.user)}</div> : <div>signed out</div>}
      <Profile />
    </div>
  );
}
