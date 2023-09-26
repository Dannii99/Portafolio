import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <title>AVATAR</title>
      <Component {...pageProps} />
    </div> 
    
  )
}
