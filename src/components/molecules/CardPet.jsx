import React from "react";
import { petsData } from "../../constants";
import arrowRight from "../../assets/images/arrowRight.png";
import HeaderWithButton from "../atoms/HeaderWithButton";

function ItemPet({ pet }) {
  return (
    <div className="flex flex-col max-w-xs bg-white rounded-xl shadow-lg mb-4">
      <div className="aspect-w-16 aspect-h-9 p-2">
        <img
          loading="lazy"
          src={pet.image}
          alt={`${pet.name} ${pet.id}`}
          className="w-full rounded-xl aspect-square"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold leading-6">
          {pet.id} - {pet.name}
        </h3>

        <div className="flex justify-start mt-2 text-sm text-gray-500">
          <span className="pr-2">Gender: {pet.gender}</span>
          <div className="flex flex-col justify-center">
            <div className="shrink-0 w-1 h-1 rounded-xl bg-sky-950" />
          </div>
          <span className="pl-2">Age: {pet.age}</span>
        </div>
        <div className="mt-2 text-xl font-semibold text-gray-900">
          {pet.price}
        </div>
      </div>
    </div>
  );
}

function CardPet() {
  return (
    <div className="container mx-auto">
      <HeaderWithButton
        title="Whats new?"
        subtitle="Take a look at some of our pets"
        buttonText="View more"
        buttonIcon={arrowRight}
        titleIsFlex={false}
      />
      <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-7">
        {petsData.map((pet) => (
          <ItemPet key={pet.id} pet={pet} />
        ))}
      </section>
    </div>
  );
}

export default CardPet;
