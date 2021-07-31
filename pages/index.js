import Head from "next/head";
import Footer from "../components/Footer";
import Section1 from "../components/section1";
import Section10 from "../components/section10";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Section5 from "../components/section5";
import Section6 from "../components/section6";
import Section7 from "../components/section7";
import Section8 from "../components/section8";
import Section9 from "../components/section9";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fizcon</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section7 />
      <Section4 />
      <Section8 />
      <Section9/>
      <Section6 />
      <Section5 /> 
      <Section10/>
      <Footer />
    </div>
  );
}
