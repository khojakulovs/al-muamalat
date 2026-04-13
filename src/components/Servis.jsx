import { servicesData } from "../constants/data";
import ServiceCart from "./ServiceCart";

function Servis() {
  return (
    <section className="custom-container min-h-screen py-10">
      <div className="max-w-[574px] mx-auto text-center mt-5">
        <h3 className="text-[40px] font-semibold">Our Services</h3>
        <p className="text-[20px] text-[#686868]">
          Expert guidance for managing funds in alignment with Islamic
          principles, helping you make informed, halal investment decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-5 mt-10">
        {servicesData.map((item) => {
          return <ServiceCart key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default Servis;
