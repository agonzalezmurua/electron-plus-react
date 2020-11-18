import React from "react";
import "twin.macro";

type ProductCardProps = {
  name: string;
  description: string;
  img: string;
};

const ProductCard: React.FunctionComponent<ProductCardProps> = (props) => {
  return (
    <div tw="bg-white rounded overflow-hidden">
      <img tw="w-full h-16" src={props.img} aria-hidden />
      <section tw="p-6">
        <h2>{props.name}</h2>
        <p tw="text-gray-800">{props.description}</p>
      </section>
    </div>
  );
};

export default ProductCard;
