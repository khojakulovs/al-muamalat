import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import expert_img from "../assets/expert.svg";

function OurExpert() {
  return (
    <section className="custom-container mt-10">
      <div className="flex flex-col items-center">
        <h2 className="text-[30px] md:text-[40px] font-semibold">
          Our Expert Team
        </h2>
        <p className="max-w-[560px] w-full text-center text-[#686868] text-[17px] mb-10">
          Our team consists of seasoned professionals with extensive experience
          in Islamic finance and management. Each member brings a unique set of
          skills and expertise.
        </p>

        <div className="carousel rounded-box w-full max-w-4xl max-h-[445px] mb-5 shadow-md">
          <div className="carousel-item w-full ">
            <div className="flex flex-col md:flex-row items-center gap-7 px-5 h-[445px] bg-[#D2E6E4] w-full">
              <div className="w-[150px] md:flex-4 ">
                <img src={expert_img} alt="expert img" />
              </div>
              <div className="flex flex-col md:flex-8  px-7 py-5">
                <h3 className="font-semibold mb-4 md:mb-6 text-[22px]">
                  Dr. Mezbah Uddin Ahmed
                </h3>
                <p className="mb-6 max-w-[470px] text-[13px] md:text-[18px]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <div className="flex gap-5 text-[18px]">
                  <FaTelegram />
                  <FaInstagram />
                  <FaFacebook />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="w-full object-cover"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurExpert;
