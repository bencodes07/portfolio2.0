import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";

type Props = {
  img: string;
  title: string;
  description: string;
  techstack: string;
  liveUrl: string;
};

function ProjectCard(props: Props) {
  return (
    <div className="relative flex max-w-[250px] flex-col rounded-lg border-[2px] border-accent shadow-md min-h-[350px]">
      <Image
        height={150}
        width={150}
        src={props.img}
        alt="Project Image"
        className="h-[150px] ml-[2px] mt-[2px] w-[calc(100%-4px)] rounded-md object-cover shadow-lg relative"
      />
      <div className="p-5 flex justify-between flex-col h-full">
        <div>
          <h1 className="mb-2 text-lg font-semibold text-[#fff]">
            {props.title}
          </h1>
          <p className="mb-3 text-sm font-normal text-[#fff]">
            {props.description}
          </p>
        </div>

        <div>
          <p className="w-fit py-1 px-2 rounded-lg text-sm font-semibold bg-divider-gray text-[#fff]">
            {props.techstack}
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 right-5 flex items-center space-x-10">
        <Link
          href={props.liveUrl}
          className="transform transition-all duration-200 hover:scale-110 hover:text-accent text-[#fff]"
          target="_blank"
        >
          <BsBoxArrowUpRight />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
