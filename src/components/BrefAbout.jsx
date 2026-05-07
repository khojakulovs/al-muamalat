import { IoMdArrowDropdownCircle } from "react-icons/io";

function BrefAbout() {
  return (
    <div className="mt-10">
      <h3 className="text-3xl text-center font-semibold mb-10">
        Brief information about the course
      </h3>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <div className="flex gap-2 justify-start items-center text-[#009688] text-2xl mb-3">
            <h5>Videodarslar</h5>
            <IoMdArrowDropdownCircle />
          </div>
          <p>
            Lessons are posted on the platform in the form of videos, which can
            be viewed anytime and anywhere. Video lessons are updated.
          </p>
        </div>

        <div className="flex-1">
          <div className="flex gap-2 justify-start items-center text-[#009688] text-2xl mb-3">
            <h5>Tasks</h5>
            <IoMdArrowDropdownCircle />
          </div>
          <p>
            Lessons are posted on the platform in the form of videos, which can
            be viewed anytime and anywhere. Video lessons are updated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrefAbout;
