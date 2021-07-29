import Head from "next/head"
import Section1 from '../components/section1'
import Section2 from '../components/section2'

export default function Home() {
  return (
   <div>
     <Head>
        <title>Fizcon</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     </Head>
     <Section1/>
     <Section2 />
   </div>
  )
}
