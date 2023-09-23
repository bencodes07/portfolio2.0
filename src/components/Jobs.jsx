"use client";
import { useEffect, useState, useRef } from "react";

function Jobs(props) {
  const [jobs, setJobs] = useState({
    job1: {
      title: "Primary School",
      description: `I went to the "Pleister Schule" in Münster (Germany) from 2013 to 2017. `,
      date: "September 2013 - June 2017",
    },
    job2: {
      title: "Work Experience",
      description: `My first ever work experience was at an IT company called "NCC Guttermann". I was there for 2 weeks and learned a lot about servers and how to set them up. I also learned how to set up an enterprise network and other things.`,
      date: "June 2022",
    },
    job3: {
      title: "Work Experience",
      description: `My second work experience was at a kindergarten called "Apostel-Kindergarten". I was there for 2 weeks and learned a lot about how to work with children and how to teach them. I also learned how to work with a team and how to be a good team player.`,
      date: "April 2023",
    },
    job4: {
      title: "Secondary School",
      description: `From 2017 until now I have been in the "Gymnasium St. Mauritz". A school that looks like hogwarts :). I am going to be there until 2025. That is when i will get my "Abitur". In Germany everything is a little different to England or America.`,
      date: "August 2017 - Present",
    },
    job5: {
      title: "TCG Vault",
      description:
        "Currently I am working at TCG Vault. I am a frontend developer there. TCG Vault is a website where you can store your TCG cards.",
      date: "October 2023 - Present",
    },
  });
  const activeJob = useRef();

  /* const query = groq`
    *[_type=='job'] {
      ...,
  }`; */
  /* useEffect(() => {
    client.fetch(query).then((res) => {
      setJobs({
        job1: {
          title: res[2].title,
          description: res[2].description,
          date: res[2].date,
        },
        job2: {
          title: res[0].title,
          description: res[0].description,
          date: res[0].date,
        },
        job3: {
          title: res[3].title,
          description: res[3].description,
          date: res[3].date,
        },
        job4: {
          title: res[1].title,
          description: res[1].description,
          date: res[1].date,
        },
        job5: {
          title: res[4].title,
          description: res[4].description,
          date: res[4].date,
        },
      });
    });
  }, [query]); */

  /* useEffect(() => {
    const activeJob = document.querySelector(".activeJob");
    document.querySelectorAll(".job").forEach((el) => {
      function jobClicked() {
        if (el.classList.contains("job1")) {
          activeJob.classList.add("top-[30px]");
          activeJob.classList.remove("top-[70px]");
          activeJob.classList.remove("top-[110px]");
          activeJob.classList.remove("top-[150px]");
          activeJob.classList.remove("top-[190px]");
        } else if (el.classList.contains("job2")) {
          activeJob.classList.add("top-[70px]");
          activeJob.classList.remove("top-[30px]");
          activeJob.classList.remove("top-[110px]");
          activeJob.classList.remove("top-[150px]");
          activeJob.classList.remove("top-[190px]");
        } else if (el.classList.contains("job3")) {
          activeJob.classList.add("top-[110px]");
          activeJob.classList.remove("top-[70px]");
          activeJob.classList.remove("top-[30px]");
          activeJob.classList.remove("top-[150px]");
          activeJob.classList.remove("top-[190px]");
        } else if (el.classList.contains("job4")) {
          activeJob.classList.add("top-[150px]");
          activeJob.classList.remove("top-[70px]");
          activeJob.classList.remove("top-[110px]");
          activeJob.classList.remove("top-[30px]");
          activeJob.classList.remove("top-[190px]");
        } else if (el.classList.contains("job5")) {
          activeJob.classList.add("top-[190px]");
          activeJob.classList.remove("top-[70px]");
          activeJob.classList.remove("top-[110px]");
          activeJob.classList.remove("top-[150px]");
          activeJob.classList.remove("top-[30px]");
        }
      }
      el.addEventListener("click", jobClicked);
    });
    return () => {};
  }, []); */

  const [job1Visible, setJob1Visible] = useState(true);
  const [job2Visible, setJob2Visible] = useState(false);
  const [job3Visible, setJob3Visible] = useState(false);
  const [job4Visible, setJob4Visible] = useState(false);
  const [job5Visible, setJob5Visible] = useState(false);

  // TODO: Make activeJob move responsively (style.top does not exist)
  const handleJob1 = (e) => {
    setJob1Visible(true);
    setJob2Visible(false);
    setJob3Visible(false);
    setJob4Visible(false);
    setJob5Visible(false);
  };
  const handleJob2 = (e) => {
    setJob1Visible(false);
    setJob2Visible(true);
    setJob3Visible(false);
    setJob4Visible(false);
    setJob5Visible(false);
  };
  const handleJob3 = () => {
    setJob1Visible(false);
    setJob2Visible(false);
    setJob3Visible(true);
    setJob4Visible(false);
    setJob5Visible(false);
  };
  const handleJob4 = () => {
    setJob1Visible(false);
    setJob2Visible(false);
    setJob3Visible(false);
    setJob4Visible(true);
    setJob5Visible(false);
  };
  const handleJob5 = () => {
    setJob1Visible(false);
    setJob2Visible(false);
    setJob3Visible(false);
    setJob4Visible(false);
    setJob5Visible(true);
  };

  return (
    <div className="flex row justify-start items-center z-10 ml-0 max-md:ml-[-40px] max-sm:ml-[-7.5rem] pb-3 mt-[20px] w-[50vw] max-md:w-[80vw]">
      <div className="sideList w-[10rem]">
        {/* <div
          ref={activeJob}
          className="activeJob content-none transition-[top] ease-in-out duration-300 w-[2px] h-10 bg-accent absolute rounded-lg mt-[-20px]"
        ></div> */}
        <ul className="flex flex-col justify-center items-center text-[#bbb] text-base cursor-pointer min-w-[170px]">
          <li
            onClick={(e) => handleJob1(e)}
            className="job job1 flex items-center w-[calc(100%-0.5rem)] h-10 border-l-2 pl-4 ml-[-0.5rem] hover:bg-accent hover:text-primary border-divider-gray hover:bg-opacity-80 rounded-r-md transition-colors ease-in"
          >
            {jobs.job1.title}
          </li>
          <li
            onClick={(e) => handleJob2(e)}
            className="job job2 flex items-center w-[calc(100%-0.5rem)] h-10 border-l-2 ml-[-0.5rem] pl-4 hover:bg-accent hover:text-primary border-divider-gray hover:bg-opacity-80 rounded-r-md transition-colors ease-in"
          >
            {jobs.job2.title}
          </li>
          <li
            onClick={handleJob3}
            className="job job3 flex items-center w-[calc(100%-0.5rem)] h-10 border-l-2 ml-[-0.5rem] pl-4 hover:bg-accent hover:text-primary border-divider-gray hover:bg-opacity-80 rounded-r-md transition-colors ease-in "
          >
            {jobs.job3.title}
          </li>
          <li
            onClick={handleJob4}
            className="job job4 flex items-center w-[calc(100%-0.5rem)] h-10 border-l-2 ml-[-0.5rem] pl-4 hover:bg-accent hover:text-primary border-divider-gray hover:bg-opacity-80 rounded-r-md transition-colors ease-in"
          >
            {jobs.job4.title}
          </li>
          <li
            onClick={handleJob5}
            className="job job5 flex items-center w-[calc(100%-0.5rem)] h-10 border-l-2 ml-[-0.5rem] pl-4 hover:bg-accent hover:text-primary border-divider-gray hover:bg-opacity-80 rounded-r-md transition-colors ease-in relative"
          >
            {jobs.job5.title}
          </li>
        </ul>
      </div>

      <div className="jobsContent max-w-xl ml-5 flex items-start justify-start flex-col">
        <h2 className=" font-bold  text-accent text-2xl">
          {job1Visible ? jobs.job1.title : ""}
          {job2Visible ? jobs.job2.title : ""}
          {job3Visible ? jobs.job3.title : ""}
          {job4Visible ? jobs.job4.title : ""}
          {job5Visible ? jobs.job5.title : ""}
        </h2>
        <code className="text-divider-gray text-sm mt-1">
          {job1Visible ? jobs.job1.date : ""}
          {job2Visible ? jobs.job2.date : ""}
          {job3Visible ? jobs.job3.date : ""}
          {job4Visible ? jobs.job4.date : ""}
          {job5Visible ? jobs.job5.date : ""}
        </code>
        <p className=" h-36 text-[#bbb] mt-1 relative max-sm:text-base">
          {job1Visible ? jobs.job1.description : ""}
          {job2Visible ? jobs.job2.description : ""}
          {job3Visible ? jobs.job3.description : ""}
          {job4Visible ? jobs.job4.description : ""}
          {job5Visible ? jobs.job5.description : ""}
        </p>
      </div>
    </div>
  );
}

export default Jobs;
