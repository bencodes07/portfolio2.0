import ScrollIndicator from "@/components/ScrollIndicator";
import { FiMail } from "react-icons/fi";

function Sidebar() {
  return (
    <aside className="h-screen max-md:hidden w-[120px] sticky z-50 top-0 bg-primary border-r-2 border-divider-gray flex items-center justify-between flex-col">
      <div className="logo mt-[20px] w-[120px] flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_2"
          data-name="Layer 2"
          viewBox="0 0 528 609.68"
          className="w-[75px] h-[75px] object-contain logoSvg"
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <text className="cls-2" transform="translate(169.72 420.87)">
              <tspan x="0" y="0">
                B
              </tspan>
            </text>
            <polygon
              className="cls-1"
              points="513 448.6 513 161.08 264 17.32 15 161.08 15 448.6 264 592.36 513 448.6"
            />
          </g>
        </svg>
      </div>
      <ScrollIndicator />
      <div>
        <a
          href="mailto:boeckmannben@gmail.com"
          className="mb-6 text-accent cursor-pointer flex justify-center items-center"
        >
          <FiMail size={32} />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
