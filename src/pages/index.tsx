import { Inter } from 'next/font/google'
import AtroposApp  from "../shared/components/atropos/atroposApp";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <AtroposApp/>
    </main>
  )
}
