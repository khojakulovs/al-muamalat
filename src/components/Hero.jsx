// assets
import hero_img from "../assets/hero_img.svg";
import userOne from "../assets/user1.svg";
import userTwo from "../assets/user2.svg";
import userTree from "../assets/user3.svg";

import { UseSearch } from "../components/UseSearch";

function Hero() {
  const { search, handleSearch, setSearch } = UseSearch("q");

  return (
    <main className="bg-gradient-to-br from-teal-600 to-teal-700 min-h-screen">
      <section className="custom-container text-white px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Blur background circles */}
        <div className="absolute w-72 h-72 bg-white/10 rounded-full top-10 left-10 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full bottom-0 right-0 blur-3xl"></div>

        {/* Left Content */}
        <div className="max-w-xl z-10">
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

            {/* <input
              type="text"
              className="border-2 z-50"
              defaultValue={search}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                } else {
                  setSearch(e.target.value);
                }
              }}
            /> */}

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src={userOne}
                  className="w-9 h-9 bg-gray-200 rounded-full border-2 border-white"
                />
                <img
                  src={userTwo}
                  className="w-9 h-9 bg-gray-200 rounded-full border-2 border-white"
                />
                <img
                  src={userTree}
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
          <div className="bg-white text-teal-700 px-4 py-2 rounded-xl absolute top-10 left-1/2 -translate-x-1/2 shadow-lg font-medium">
            250k Assisted Student
          </div>

          <img
            src={hero_img}
            alt="student"
            className=" w-[280px] md:w-[380px]"
          />

          {/* gradient */}
          <div className="bg-gradient-to-r from-[#00c6ff] via-[#00e5a8] to-[#4facfe]"></div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
