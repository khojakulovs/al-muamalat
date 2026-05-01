// assets
import { IoCalendarOutline } from "react-icons/io5";
import { hero, user_One, user_Two, user_Tree } from "../assets/index";

function Hero() {
  return (
    <main className="bg-gradient-to-br from-teal-600 to-teal-700 min-h-screen">
      <section className="custom-container text-white px-6 md:px-16 py-20 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden">
        {/* Blur background circles */}
        <div className="absolute w-72 h-72 bg-white/10 rounded-full top-10 left-10 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full bottom-0 right-0 blur-3xl"></div>

        {/* Left Content */}
        <div className="max-w-xl z-10 mt-3 md:mt-0">
          <p className="bg-white/90 text-teal-700 inline-block px-4 py-1 rounded-full text-sm mb-6 font-medium">
            Seeking Knowledge is an Obligation in Islam
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Enhance Your Understanding of Islamic Ethics with Al-Muamalat
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl font-semibold shadow-lg">
              STUDENTS' OPINION
            </button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src={user_One}
                  className="w-9 h-9 bg-gray-200 rounded-full border-2 border-white"
                />
                <img
                  src={user_Two}
                  className="w-9 h-9 bg-gray-200 rounded-full border-2 border-white"
                />
                <img
                  src={user_Tree}
                  className="w-9 h-9 bg-gray-200 rounded-full border-2 border-white"
                />
              </div>
              <span className="text-md text-white/90">
                ★★★★★ (10k+ Reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-12 md:mt-0  z-10">
          <div className="inline-flex items-center gap-3.5 bg-white/90 border border-gray-100 rounded-2xl px-3 md:px-5 py-1 md:py-3">
            <div className=" w-[36px] md:w-[46px] h-[36px] md:h-[46px] bg-[#23BDEE] rounded-xl flex items-center justify-center flex-shrink-0">
              <IoCalendarOutline className="text-white text-2xl" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[19px] md:text-xl font-medium text-gray-900 leading-tight">
                250k
              </span>
              <span className="text-[13px] text-gray-700">
                Assisted Student
              </span>
            </div>
          </div>

          <img src={hero} alt="student" className=" w-[280px] md:w-[380px]" />

          {/* gradient */}
          <div className="bg-gradient-to-r from-[#00c6ff] via-[#00e5a8] to-[#4facfe]"></div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
