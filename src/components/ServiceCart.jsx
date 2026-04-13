const ServiceCard = ({
  icon: Icon,
  title,
  description,
  bg,
  iconBg,
  iconColor,
}) => {
  return (
    <div
      className="rounded-xl border shadow-sm border-black/5 p-5 flex flex-col gap-3 transition-all duration-400 ease-in-out hover:scale-[1.01]"
      style={{ backgroundColor: bg, boxShadow: "none" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = `0 0 20px ${iconColor}55`)
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div
        className="w-[85px] h-[85px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="w-[50px] h-[50px]" color={iconColor} />
      </div>
      <h3 className="text-[24px] font-semibold leading-snug m-0">{title}</h3>
      <p className="text-[17px] text-gray-500 leading-relaxed flex-1 m-0">
        {description}
      </p>
      <button className="mt-1 w-full bg-[#1a1a2e] hover:bg-[#16213e] text-white text-[13px] py-2.5 rounded-lg transition-colors">
        Learn more
      </button>
    </div>
  );
};

export default ServiceCard;
