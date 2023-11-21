"use client";

import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          SaveAKid - The ultimate donations platform for supporting children in
          Africa.
        </title>
        <meta
          name="SaveAKid"
          content=" SaveAKid is a donations platform aiming to provide support for
          children."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <SectionTitle
        pretitle="SaveAKid Benefits"
        title=" Why should you use SaveAKid?"
      >
        We work in the hardest-to-reach places, where it&apos;s toughest to be a
        child. We help connect the little angels and their care givers to well
        wishers like you, so that their basic and educational needs are met.
        It's through our collaboration, you and us, that the lives of these kids
        are filled with smiles and fulfillment.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="The impact we dream of creating"
      >
        The video you see below is a representation of the admirable impact we
        want to create. In the video you can see how happy the children are when
        they are provided for by Mr. Beast. At SaveAKid, we believe that we
        could do even more if you join us in this journey.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <PopupWidget />
    </>
  );
};

export default Home;
