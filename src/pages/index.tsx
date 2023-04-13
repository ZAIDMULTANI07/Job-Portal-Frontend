import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Card from "../@components/LandingPageCard/LandingPageCard";


import { useContext } from "react";
import { Data } from "../ImageJson/Data";

import { UserContext } from "../contexts/UserContext";
import Seo from "../@common/Seo/Seo";
import { Background } from "../@common/Background";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <section>
      <Seo title="Welcome to MyJobs" description="Welcome to MyJobs" />
      <div className="relative">
        <Background
          height="lg:h-[350px] md:h-[350px] sm:h-[315px] h-[550px]"
          display={true}
          name=""
        />
        <div className="">
          <div className="absolute w-full lg:top-16 md:top-16 sm:top-10 top-6">
            <div className="lg:px-24 md:px-3 sm:px-3 px-5 container mx-auto lg:flex md:flex sm:flex gap-8 w-full animate-bottom">
              <div className="">
                <div className="lg:text-[60px] text-[50px] text-white w-max">
                  <span className="h-[70px] font-[300]">Welcome to</span>
                  <h3 className="h-[72px] font-[500] leading-none">
                    My<span className="text-[#43AFFF]">Jobs</span>
                  </h3>
                </div>
                <div className="mt-8">
                  {!user ? (
                    <Link
                      href="/signup"
                      className="rounded bg-[#43AFFF] hover:bg-[#289cf5] text-white text-sm px-5 py-3"
                    >
                      Get Started
                    </Link>
                  ) : (
                    <div>
                      {!user!.userRole ? (
                        <Link
                          href={"/recruiter"}
                          className="rounded bg-[#43AFFF] hover:bg-[#289cf5] text-white text-sm px-5 py-3"
                        >
                          Get Started
                        </Link>
                      ) : (
                        <Link
                          href={"/candidate"}
                          className="rounded bg-[#43AFFF] hover:bg-[#289cf5] text-white text-sm px-5 py-3"
                        >
                          Get Started
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="lg:mt-0 md:mt-0 sm:mt-0 xs:mt-0 w-full mt-14 relative lg:justify-end md:justify-end sm:justify-end flex">
                <img
                  src="/Images/home.png"
                  className="lg:h-[340px] md:h-[340px] h-[270px] lg:mt-0 md:mt-0 sm:mt-10 mt-9 shadow-lg border rounded-2xl absolute"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="mt-24 lg:px-24 md:px-3 sm:px-3 px-5 container py-3 mx-auto animate-bottom">
            <div className="mb-16">
              <h2 className="text-[22px]">Why Us</h2>
              <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-center gap-7 mt-10">
                <Card
                  title1={"Get More"}
                  title2={"Visibility"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                />
                <Card
                  title1={"Organize Your"}
                  title2={"Candidates"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                />
                <Card
                  title1={"Verify Their"}
                  title2={"Abilities"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                />
              </div>
            </div>
            <h2 className="text-[22px] my-5 mb-8">Companies Who Trust Us</h2>
            <div className="flex flex-wrap items-center justify-center w-full gap-x-[5.6rem]">
              {Data.map((image) => {
                return (
                  <div
                    className="flex items-center w-[10rem] lg:w-fit mb-8"
                    key={image.id}
                  >
                    <img src={image.image} alt="image" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
