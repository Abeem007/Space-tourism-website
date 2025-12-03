import "../BackgroundPage.css";


import Header from "./Header";

const Home = () => {
  return (
    <div className="min-h-screen landing-bg  ">
      <Header />

      <div className="home-content flex flex-col lg:flex-row md:justify-evenly items-center justify-around h-screen text-white  ">
        <div
          className="home-text-content md:w-1/2 flex  flex-col   lg:items-start justify-center text-center
         items-center lg:justify-evenly text-[#ebebf0]  opacity-90 "
        >
          <h3 className="typewriter md:tracking-[0.1rem] text-base md:text-xl lg:text-md ">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="home-title text-[4.5rem] md:text-[8rem] lg:text-[6.5rem] tracking-[0.3rem] md:tracking-[0.5rem] lg:tracking-[0.3rem]  text-white bg-linear-to-r from-[#c90a0a] to-blue-200 bg-clip-text">
            SPACE
          </h1>
          <h3 className="home-description leading-8 opacity-80 lg:leading-7 text-[#d6d7fa] xl:w-[60%] text-center w-[80%] md:w-full  lg:text-left text-base  lg:text-[14px] xl:text-[15px]  mt-3 lg:w-[70%]">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </h3>
        </div>

        <div className="home-explore-circle w-40 h-40 md:w-[270px] md:h-[270px] lg:w-[250px] lg:h-[250px] rounded-full bg-white flex text-black items-center justify-center ">
          <p
            id="home-p2"
            className="uppercase text-xl text-blue-900  tracking-[0.1rem]"
          >
            explore
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
