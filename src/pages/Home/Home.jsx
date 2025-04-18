import React from "react";
import image from "../../assets/image.jpg";
import resumePDF from "../../assets/resumehj.pdf";

const Home = () => {
  const backgroundStyles = [
    "bg-black",
    "bg-black",
    "bg-transparent",
    "bg-black",
    "bg-white",
    "bg-transparent",
    "bg-black",
    "bg-white",
    "bg-transparent",
    "bg-black",
    "bg-white",
    "bg-transparent",
    "bg-black",
    "bg-black",
    "bg-transparent ",
    "bg-black",
    "bg-black",
    "bg-transparent",
    "bg-black",
    "bg-white",
    "bg-transparent",
    "bg-black",
    "bg-white",
    "bg-transparent",
    "bg-black",
    "bg-white",
    "bg-transparent",
    "bg-black",
    "bg-white",
    "bg-transparent",
    "bg-black",
    "bg-black",
  ];

  const gridItems = backgroundStyles.map((style, index) => (
    <div key={index} className={`${style} relative`}>
      <div className="absolute inset-0 opacity-20 border-b border-gray-500"></div>
    </div>
  ));

  return (
    <section
      id="home"
      className="relative min-h-screen text-white mt-16 md:mt-24 "
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 grid-rows-8 md:grid-rows-4">
        {gridItems}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 z-30 bg-black p-20 md:p-8 w-fit">
            <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4 mt-4 text-wrap md:mt-8 w-fit">
            Software Developer 
              <br />
            </h1>
          </div>
          <div className="md:col-span-4"></div>
          <div className="md:col-span-8 md:col-start-1 md:row-start-2 "></div>
          <div className="md:col-span-4 md:col-start-9 md:row-start-2 bg-black p-6 py-20 md:p-8 w-fit px-12">
            <p className="mb-4 text-white bg-black text-wrap font-inconsolata text-sm md:text-base">
            Experienced in building AI-enabled projects to solve complex  
              <br />
            technical challenges, delivering innovative and impactful solutions.
            </p>
            <div className="space-y-2 flex flex-col md:flex-row gap-4">
              {" "}
              <a href={"https://drive.google.com/file/d/1d5tFyR7U1wUP22iA4sUrpvgHQgpLnAzB/view?usp=sharing"} target="_blank" rel="noopener noreferrer">
                <button className="w-fit  border border-white px-4 py-2 text-nowrap hover:bg-white hover:text-black transition-colors text-center text-sm md:text-base">
                  Checkout my Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
