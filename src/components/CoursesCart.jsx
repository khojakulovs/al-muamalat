const CourseCard = ({
  badge,
  badgeType,
  price,
  rating,
  reviewCount,
  bgColor,
  illustration,
}) => {
  const badgeStyles = {
    design: "bg-[#F4C4B3] text-[#993C1D]",
    business: "bg-[#CECBF6] text-[#3C3489]",
  };

  const Stars = ({ count, total = 5 }) =>
    Array.from({ length: total }).map((_, i) => (
      <span
        key={i}
        className={`text-[#F4A623] text-[13px] ${i >= count ? "opacity-40" : ""}`}
      >
        ★
      </span>
    ));

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-gray-200 transition-all duration-200 cursor-pointer">
      {/* Card Image */}
      <div
        className={`relative w-full h-36 flex items-center justify-center ${bgColor}`}
      >
        <span
          className={`absolute top-2.5 left-2.5 text-[11px] font-medium px-3 py-1 rounded-full ${badgeStyles[badgeType]}`}
        >
          {badge}
        </span>
        {illustration}
      </div>

      {/* Card Body */}
      <div className="px-3.5 pt-3.5 pb-3">
        <p className="text-[13px] text-gray-500 leading-snug mb-2">
          Various versions have evolve...
        </p>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-2.5">
          <Stars count={rating} />
          <span className="text-[12px] text-gray-400 ml-0.5">
            ({reviewCount})
          </span>
        </div>

        {/* Price + Arrow */}
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-medium text-gray-900">
            $ {price}
          </span>
          <button className="w-7 h-7 rounded-full bg-[#1BAE7E] hover:bg-[#0F6E56] flex items-center justify-center transition-colors duration-150">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M3 10L10 3M10 3H5M10 3V8"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
