import About from "@/components/About";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Categories />
      <About />
      <Why />
      <Testimonials />
    </main>
  );
}
