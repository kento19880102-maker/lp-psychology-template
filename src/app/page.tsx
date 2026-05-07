import { BeforeAfter } from "@/components/BeforeAfter";
import { ContactForm } from "@/components/ContactForm";
import { CtaSection } from "@/components/CtaSection";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoWall } from "@/components/LogoWall";
import { LossAversion } from "@/components/LossAversion";
import { MidCta } from "@/components/MidCta";
import { Pricing } from "@/components/Pricing";
import { Problems } from "@/components/Problems";
import { SocialProofStats } from "@/components/SocialProofStats";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProofStats />
        <Problems />
        <LossAversion />
        <Features />
        <MidCta variant="compact" />
        <BeforeAfter />
        <Testimonials />
        <LogoWall />
        <Pricing />
        <MidCta variant="pricing" />
        <Faq />
        <CtaSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
