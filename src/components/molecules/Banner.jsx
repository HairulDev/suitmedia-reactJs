import * as React from "react";
import banner1 from "../../assets/images/banner/banner1.png";
import shapeYellow from "../../assets/images/shapeYellow.png";
import iconPlay from "../../assets/images/icons/iconPlay.png";
import Button from "../atoms/Button";

function Banner() {
  return (
    <section className="mt-7 rounded-3xl bg-sky-950 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={banner1}
            alt="Placeholder image"
            className="grow w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div
          style={{
            padding: 20,
            paddingLeft: 20,
            backgroundImage: `url(${shapeYellow})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div className="flex flex-col self-stretch my-auto font-medium leading-[150%] max-md:mt-10">
            <h1 className="text-right text-5xl font-extrabold capitalize leading-[68.12px] text-sky-950 max-md:text-4xl">
              One more friend
            </h1>
            <h2 className="text-right text-4xl font-bold capitalize text-sky-950 max-md:mr-2.5">
              Thousands more fun!
            </h2>
            <p className="p-2 mt-7 text-xs leading-5 text-right text-gray-800">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex gap-5 self-end mt-7 text-base">
              <Button
                outlined="outlined"
                rounded="rounded-[57px]"
                iconSrc={iconPlay}
              >
                View Intro
              </Button>
              <Button rounded="rounded-[57px]">Explore Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
