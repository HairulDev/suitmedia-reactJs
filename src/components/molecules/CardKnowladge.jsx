import React from "react";
import { petKnowledgeData } from "../../constants";
import arrowRight from "../../assets/images/arrowRight.png";
import HeaderWithButton from "../atoms/HeaderWithButton";

function ItemKnowladge({ image, title, description }) {
  return (
    <div className="flex flex-col max-w-xs bg-white rounded-xl shadow-lg mb-4">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full aspect-w-4 aspect-h-3 object-cover"
        />
      </div>
      <div className="p-3 flex flex-col py-2 pr-2 mt-2">
        <div className="justify-center self-start px-2.5 py-0.5 text-xs font-bold leading-4 text-white bg-sky-500 rounded-3xl">
          Pet knowledge
        </div>
        <div className="flex flex-col mt-2.5 max-md:ml-2">
          <h3 className="text-base font-bold leading-6 text-slate-900">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-5 text-gray-800 overflow-hidden overflow-ellipsis">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CardKnowledge() {
  return (
    <div className="container mx-auto">
      <HeaderWithButton
        title="You already know?"
        subtitle="Useful pet knowledge"
        buttonText="View more"
        buttonIcon={arrowRight}
        titleIsFlex={false}
      />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-7">
        {petKnowledgeData.map((data, index) => (
          <ItemKnowladge
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </section>
    </div>
  );
}

export default CardKnowledge;
