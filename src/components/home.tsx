import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import MissionSection from '@/components/home/MissionSection';
import Services from '@/components/home/Services';
import ProductsSection from '@/components/home/ProductsSection';
import Projects from '@/components/home/Projects';
import Partners from '@/components/home/Partners';
import CTABanner from '@/components/home/CTABanner';
import NewsSection from '@/components/home/NewsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MissionSection />
        <Services />
        <ProductsSection />
        <Projects />
        <Partners />
        <CTABanner />
        <NewsSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
