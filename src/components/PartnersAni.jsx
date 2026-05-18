const partners = [
  { name: "AMERICAN EXPRESS", color: "#006FCF" },
  { name: "Western Union", color: "#FFD700" },
  { name: "Klarna.", color: "#FF9900" },
  { name: "Skrill", color: "#8B1A1A" },
  { name: "stripe", color: "#635BFF" },
  { name: "amazon", color: "#FF9900" },
];

function PartnersAni({ reverse = false }) {
  return (
    <div className="overflow-hidden relative my-3">
      {/* Soldan va o'ngdan oqib ketish effekti */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div
        className="flex w-max"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} 18s linear infinite`,
        }}
      >
        {/* Cheksiz aylanish uchun 2 marta render qilamiz */}
        {[...partners, ...partners].map((p, i) => (
          <div
            key={i}
            className="flex items-center justify-center mx-2 px-8 py-3 bg-white
                       border border-gray-200 rounded-xl min-w-[150px] h-16
                       hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer"
          >
            <span style={{ color: p.color }} className="font-bold text-sm">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnersAni;
