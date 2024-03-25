import React from "react";
import { productsData } from "../../constants";
import box from "../../assets/images/box.png";
import arrowRight from "../../assets/images/arrowRight.png";
import HeaderWithButton from "../atoms/HeaderWithButton";

function ProductItem({ product }) {
  return (
    <div className="flex flex-col max-w-xs bg-white rounded-xl shadow-lg mb-4">
      <div className="aspect-w-16 aspect-h-9 p-2">
        <img
          loading="lazy"
          src={product.image}
          alt={`${product.name} ${product.id}`}
          className="w-full rounded-xl aspect-square"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold leading-6">{product.name}</h3>

        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>Product: {product.type}</span>
          <span>Size: {product.size}</span>
        </div>
        <div className="mt-2 text-xl font-semibold text-gray-900">
          {product.price}
        </div>
        <div className="flex gap-0.5 justify-between px-2.5 pt-1.5 pb-1 mt-2.5 font-bold bg-orange-100 rounded-lg text-sky-950">
          <div className="flex gap-0.5 items-start self-stretch px-2.5 pt-1.5 bg-orange-100 rounded-lg">
            <img
              loading="lazy"
              src={box}
              className="shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <div className="flex flex-col justify-center px-2 py-2.5">
              <div className="shrink-0 w-1 h-1 rounded-xl bg-sky-950" />
            </div>
            <div className="text-sm font-bold leading-5 text-sky-950">
              {product.discount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardProduct() {
  return (
    <div className="container mx-auto">
      <HeaderWithButton
        title="Hard to choose right products for your pets?"
        subtitle="Our Products"
        buttonText="View more"
        buttonIcon={arrowRight}
        titleIsFlex={false}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
        {productsData.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CardProduct;
