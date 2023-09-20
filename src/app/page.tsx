import Sidebar from "../components/Sidebar";
import DisplacementSphere from "../components/DisplacementSphere";
import BgParticles from "@/components/BgParticles";
import Hero from "@/components/Hero";
import PageSection from "@/components/PageSection";
import Jobs from "@/components/Jobs";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="w-[calc(100%-120px)] bg-primary">
          <BgParticles />
          <section id="hero" className="h-screen w-full">
            <DisplacementSphere />
            <Hero />
          </section>
          <PageSection number={1} id="About" height={80}>
            <div className="">
              <p className="text-[#bbb] font-medium max-w-[50vw] mt-2 tracking-wider max-md:max-w-[80vw] max-sm:text-base max-sm:ml-[-7.5rem]">
                {`I'm always looking to work together with companies and
              individuals. I have a good sense of humor and like to find new
              friends :). I'm only 16 years old, but that does'nt stop me
              from doing what I like`}
              </p>
              <blockquote className="mt-4 pl-2 max-w-fit text-[#bbb] before:content-none realtive left-[-10px] border-l-2 before:rounded-md border-l-accent max-md:hidden">
                {`
                "When life gets you down, you know what you gotta do? Just keep
                swimming." - Dory`}
              </blockquote>
              <Jobs />
            </div>
          </PageSection>
          <PageSection number={2} id="Skills" height={90}>
            <Skills />
          </PageSection>
          <PageSection number={3} id="Projects">
            <Projects />
          </PageSection>
          <Footer />
        </main>
      </div>
    </>
  );
}
