import * as React from "react";
import hero from "../../assets/images/hero.png";
import iconPlay from "../../assets/images/icons/iconPlay.png";
import Button from "../atoms/Button";
import Modal from "./Modal";

function Hero() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="pl-20 rounded-none bg-[linear-gradient(103deg,#FCEED5_6.43%,#FCEED5_78.33%,#FFE7BA_104.24%)] max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col self-stretch my-auto text-base font-medium max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl font-extrabold capitalize leading-[67.8px] text-sky-950 max-md:max-w-full max-md:text-4xl">
              One more friend
            </div>
            <div className="mt-8 text-5xl font-bold capitalize leading-[59.8px] text-sky-950 max-md:max-w-full max-md:text-4xl">
              Thousands more fun!
            </div>
            <div className="mt-11 leading-6 text-gray-800 max-md:mt-10 max-md:max-w-full">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </div>
            <div className="flex gap-5 mt-10 leading-[150%] max-md:flex-wrap">
              <Button
                outlined="outlined"
                rounded="rounded-[57px]"
                iconSrc={iconPlay}
                onClick={handleOpenModal}
              >
                View Intro
              </Button>
              <Button rounded="rounded-[57px]">Explore Now</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={hero}
            className="grow mt-1 w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}

export default Hero;
