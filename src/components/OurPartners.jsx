import { PartnersAni } from "../components";

function OurPartners() {
  return (
    <section className="custom-container py-10 mt-10">
      <h3 className="font-semibold text-[34px] text-center">
        Our Partners and Clients
      </h3>

      <PartnersAni />
      <PartnersAni reverse={true} />
    </section>
  );
}

export default OurPartners;
