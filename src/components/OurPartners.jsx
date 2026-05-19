import { PartnersAni } from "../components";

function OurPartners() {
  return (
    <section className="custom-container py-10 md:mt-10">
      <h3 className="font-semibold text-[22px] md:text-[34px] text-center mb-4">
        Our Partners and Clients
      </h3>

      <PartnersAni />
      <PartnersAni reverse={true} />
    </section>
  );
}

export default OurPartners;
