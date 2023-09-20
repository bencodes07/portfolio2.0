"use client";
import { useEffect, useState } from "react";

function ScrollIndicator() {
  const [scroll, setScroll] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener("scroll", scrollFunc);
    function scrollFunc() {
      const currProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight && currProgress) {
        setScroll((currProgress / scrollHeight).toFixed(2) * 137);
      }
    }

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);
  return (
    <div className="pageDots w-full h-[100px] flex justify-between items-center flex-col mb-8">
      <div className="border-[1px] border-light-gray w-[15px] h-[75px] rounded-full">
        <div
          className="bg-accent w-[13px] h-[13px] absolute rounded-full"
          style={{ marginTop: scroll / 2.25 }}
        ></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
