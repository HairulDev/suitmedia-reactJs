import React from "react";
import { sellersData } from "../../constants";
import arrowRight from "../../assets/images/arrowRight.png";
import HeaderWithButton from "../atoms/HeaderWithButton";

function OurSeller({ seller }) {
  return (
    <div className="flex items-center">
      <img
        loading="lazy"
        src={seller.image}
        alt={seller.name}
        className="h-24 w-auto"
      />
    </div>
  );
}

function Seller() {
  return (
    <div className="container mx-auto">
      <HeaderWithButton
        title="Proud to be part of"
        subtitle="Pet Sellers"
        buttonText="View all our sellers"
        buttonIcon={arrowRight}
        titleIsFlex={true}
      />
      <section className="grid grid-cols-2 md:grid-cols-6 gap-5 px-5 mt-7">
        {sellersData.map((seller) => (
          <OurSeller key={seller.id} seller={seller} />
        ))}
      </section>
    </div>
  );
}

export default Seller;
