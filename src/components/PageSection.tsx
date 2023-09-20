"use client";
import { useEffect, useRef } from "react";
type Props = {
  children?: JSX.Element; // Children elements
  id: string; // the section name (identifier)
  number: number; // the number showing in the heading
  height?: number; // the height of the section in % (-> vh).
};

function PageSection(props: Props) {
  const pageSection = useRef<HTMLElement>(null);
  useEffect(() => {
    if (props.height && pageSection.current != null) {
      pageSection.current.style.minHeight = `calc(${props.height} * 100vh / 100)`;
    } else if (!props.height && pageSection.current != null) {
      pageSection.current.style.minHeight = `100vh`;
    }
  }, [props.height]);

  return (
    <section
      className="min-h-screen w-full relative max-md:w-screen overflow-hidden"
      id={props.id}
      ref={pageSection}
    >
      <div className="flex justify-between items-center absolute right-0">
        <h2 className="text-5xl text-[#6295ca] font-bold mr-5 max-sm:text-4xl">
          <code className="text-4xl font-normal">0{props.number}.</code>{" "}
          {props.id}
        </h2>
        <span className="aboutLine bg-[#6295ca] h-[2px] w-[30vw]"></span>
      </div>

      <div className="left-24 relative top-32">
        <code className="sectionCode top text-light-gray lowercase text-xl whitespace-nowrap overflow-hidden mb-2 max-sm:hidden">
          {`<section id="${props.id}">`}
        </code>
        <div className="ml-10 text-xl">{props.children}</div>

        <code className="sectionCode bottom text-light-gray text-xl mt-2 max-sm:hidden">
          {"</section>"}
        </code>
      </div>
    </section>
  );
}

export default PageSection;
