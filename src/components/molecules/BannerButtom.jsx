import * as React from "react";
import banner2 from "../../assets/images/banner/banner2.png";
import shapeYellow from "../../assets/images/shapeYellow2.png";
import iconPlay from "../../assets/images/icons/iconPlay.png";
import Button from "../atoms/Button";
import Modal from "./Modal";

function BannerButtom() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <section className="mt-7 rounded-3xl bg-[#FFB775] max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div
          style={{
            backgroundImage: `url(${shapeYellow})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "50vh",
            width: "100%",
          }}
        >
          <div className="flex flex-col self-stretch my-auto font-medium leading-[150%] max-md:mt-10 p-10">
            <h1 className="text-left text-5xl font-extrabold capitalize leading-[68.12px] text-sky-950 max-md:text-4xl">
              Adoption
            </h1>
            <h2 className="text-left mt-8 text-4xl font-bold capitalize text-sky-950 max-md:mr-2.5">
              We Need Help. So Do They.
            </h2>
            <p className="mt-7 text-xs leading-5 text-left text-gray-800">
              Adopt a pet and give it a home.
            </p>
            <p className="text-xs leading-5 text-left text-gray-800">
              It will be love you back unconditionally.
            </p>
            <div className="flex gap-5 self-start mt-7 text-base">
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
        <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={banner2}
            alt="Placeholder image"
            className="grow w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
          />
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
    </section>
  );
}

export default BannerButtom;
