import { IoIosCheckmarkCircle } from "react-icons/io";

function ProgramInfo({ selectedCourse }) {
  const learnItems = [
    "Gain a comprehensive understanding of Islamic finance principles and ethics.",
    "Build a portfolio with 10+ real-world projects in Islamic financial services.",
    "Learn to develop and manage Sharia-compliant financial products.",
    "Master key concepts in Islamic banking, investment, and wealth management.",
    "Understand the fundamentals of risk management in Islamic finance.",
    "Develop skills to work as an Islamic finance consultant.",
  ];

  const whyItems = [
    "Lifetime access",
    "Video lessons",
    "Tests",
    "Projects",
    "Downloadable resources",
    "Access via mobile device",
  ];

  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Chap — What you'll learn */}
        <div className="flex-1 p-8 shadow-sm bg-[#F3F8FF] rounded-2xl overflow-hidden">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            What you'll learn
          </h3>
          <ul className="space-y-4">
            {learnItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <IoIosCheckmarkCircle className="w-4.5 h-4.5 shrink-0 mt-1" />
                <span className="text-gray-600 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* O'ng — Why AL-MUAMALAT */}
        <div className="flex-1 p-8 shadow-sm bg-[#F3F8FF] rounded-2xl overflow-hidden">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Why should you study at <span className="">"AL-MUAMALAT"</span>?
          </h3>
          <ul className="space-y-4">
            {whyItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gray-800 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProgramInfo;
