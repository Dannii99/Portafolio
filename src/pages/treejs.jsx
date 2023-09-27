import { Inter } from 'next/font/google'
import AvatarApp  from "../shared/components/avatar/avatarApp";

const inter = Inter({ subsets: ['latin'] })

export default function Treejs() {
  return (
    <main className="flex flex-col items-center justify-center">
     { <AvatarApp/>}
    </main>
  )
}
