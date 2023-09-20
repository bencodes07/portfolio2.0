"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function Hero() {
  /* let tlLoadHero = gsap.timeline({ paused: false });

  useEffect(() => {
    const sectionCodeTop = document.querySelector(".sectionCode.top");
    const sectionCodeBottom = document.querySelector(".sectionCode.bottom");
    const hiText = document.querySelector(".innerHero p");
    const topHeading = document.querySelector(".innerHero h1");
    const bottomHeading = document.querySelector(".innerHero h2");
    const heroText = document.querySelector(".heroText");

    const main_blue = "#6295ca";
    const main_dark = "#292732";

    // Gsap

    let ctx = gsap.context(() => {
      tlLoadHero
        .delay(2)
        .timeScale(2)
        .fromTo(
          sectionCodeTop,
          2,
          { width: 0 },
          { width: 108.375, ease: SteppedEase.config(9) }
        )
        .fromTo(
          sectionCodeBottom,
          1,
          { opacity: 0 },
          { opacity: 1, ease: SteppedEase.config(1) }
        )
        .to(sectionCodeBottom, 0.5, { x: -100, y: 335 })
        .to(document.querySelector(".sectionLine"), 1, {
          height: 260,
          ease: Power4.easeIn(),
        })
        .fromTo(hiText, 0.5, { y: -50 }, { y: 0, opacity: 1 })
        .fromTo(topHeading, 0.5, { y: -50 }, { y: 0, opacity: 1 })
        .fromTo(bottomHeading, 0.5, { y: -50 }, { y: 0, opacity: 1 })
        .fromTo(heroText, 0.5, { y: -50 }, { y: 0, opacity: 1 });
    });

    return () => {
      ctx.revert();
    };
  }); */
  const scrollText1 = useRef(null);
  const scrollText2 = useRef(null);
  const scrollTextContainer = useRef(null);
  let xPercent = 0;
  let direction = -1;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(scrollTextContainer.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(scrollText1.current, { xPercent: xPercent });
    gsap.set(scrollText2.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };
  return (
    <>
      <div className="h-full select-none flex justify-center items-center z-10 relative">
        {/* Hero Text */}
        <div className="flex w-full justify-center mb-32 max-md:mb-[50vh] items-start flex-col h-[40%] ml-24 max-sm:ml-2">
          <code className="sectionCode top text-light-gray text-xl max-sm:text-lg whitespace-nowrap mb-2">
            {"<section>"}
          </code>
          <div className="ml-10">
            <span className="sectionLine w-[1px] h-0 bg-light-gray block content-none"></span>
            <p className=" text-accent text-2xl max-sm:text-xl w-[600px] ml-[-1rem]">
              Hi there, I&apos;m
            </p>
            <h1 className="text-[#ffffff] font-bold text-6xl max-sm:text-4xl ">
              Ben{" "}
              <span className="heroHeadingSpan font-thin text-primary font-logo">
                aka bencodes
              </span>
            </h1>
            <h2 className="text-[#bbbbbb] text-6xl max-sm:text-4xl font-bold font-logo tracking-wider">
              I code websites.
            </h2>
            <p className="max-w-[600px] w-[50vw] max-md:w-[80vw] text-light-gray text-xl max-sm:text-base">
              I&apos;m a Full-Stack-Webdeveloper coding and designing different
              kinds of applications. My focus is to make the web a better and
              more enjoyable place for everyone!
            </p>
          </div>

          <code className="sectionCode bottom text-light-gray text-xl mt-2 max-sm:text-lg">
            {"</section>"}
          </code>
        </div>
        {/* Scrolling Text */}
        <div className="absolute top-[calc(100vh-250px)] max-sm:hidden">
          <div
            ref={scrollTextContainer}
            className="relative whitespace-nowrap flex"
          >
            <p
              className="heroHeadingSpan text-primary text-[10rem] font-bold"
              ref={scrollText1}
            >
              Ben Böckmann -
            </p>
            <p
              className="heroHeadingSpan text-primary text-[10rem] font-bold absolute left-full"
              ref={scrollText2}
            >
              Ben Böckmann -
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
