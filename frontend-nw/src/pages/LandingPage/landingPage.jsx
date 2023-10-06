import React from "react";
import Hero from "../../components/landingPage/hero";
import Trusted from "../../components/landingPage/trusted";
import Features from "../../components/landingPage/features";
import Benefits from "../../components/landingPage/benefits";
import Testimonials from "../../components/landingPage/testimonials";
import FAQCTA from "../../components/landingPage/faq-cta";
import Subscription from "../../components/landingPage/subscription";
import Footer from "../../components/landingPage/footer";
import NavBar from "../../components/landingPage/navbar";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Trusted />
      <Features />
      <Benefits />
      <Testimonials />
      <FAQCTA />
      <Subscription />
      <Footer />
    </div>
  );
};

export default LandingPage;
