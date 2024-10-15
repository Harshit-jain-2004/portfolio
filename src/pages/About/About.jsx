import React, { useEffect } from "react";
import about from "../../assets/about.png";
import { RxTriangleRight } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Restful API",
    "MLOps",
    "Python",
    "Java",
    "C++",
    "HTML/CSS",
    "Linux",
    "GitHub",
    "Jupyter",
    "GCP",
  ];
  return (
    <section className="text-white mb-8" id="about" data-aos="fade-up">
      <p className="mt-8 ml-8 text-xs bg-white/65 p-2 rounded-xl w-fit">
        ⚪ About
      </p>
      <div className="flex md:flex-row flex-col justify-around items-center mt-4  ">
        <div className="">
          <img
            src={about}
            alt="harshit jain"
            className=" rounded-lg shadow-md shadow-slate-200/10 mb-6 "
          />
        </div>
        <div className="md:w-1/2 w-4/5 ">
          <h1 className="font-normal text-6xl font-poppins p-4 text-center">
            Harshit Jain
          </h1>
          <p className="text-justify font-inconsolata-condensed  text-wrap ">
          I am Harshit Jain, a Computer Science and Engineering student at Graphic Era University,
          with a strong passion for software development and AI-driven innovations. My journey includes
          internships at RateGain Travel Technologies Limited and the Defence Research and Development Organisation, 
          where I gained valuable experience in creating web applications and exploring advanced imaging technologies. 
          Through these roles, I developed a keen understanding of how software solutions can drive efficiency and 
          deliver impactful results.
          </p>{" "}
          <br />
          <p className="text-justify font-inconsolata-condensed  text-wrap">
          My project portfolio showcases a range of applications, from developing Websites, Webapps to building intelligent Chatbots. 
          Beyond my technical skills, I am deeply engaged in community initiatives, actively contributing to the National Service Scheme
          and participating in National-Level Hackathons. My goal is to leverage my skills to create innovative solutions that address
          real-world challenges, continuously learning and growing along the way.
          </p>
          <br />
          <h3 className=" font-light font-poppins text-xl ">Skills:</h3>
          <ul className="md:mx-10 text-justify text-nowrap grid md:grid-rows-3 grid-rows-7 md:grid-cols-4 grid-cols-3 md:w-2/2 md:gap-2 md:gap-x-2 gap-x-36">
            {skills &&
              skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex flex-row items-center font-inconsolata "
                >
                  {" "}
                  <RxTriangleRight />
                  {skill}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
