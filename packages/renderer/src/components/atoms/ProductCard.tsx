import React from "react";
import 'twin.macro';

type ProductCardProps = {
  name: string;
  description: string;
  img: string;
};

const ProductCard: React.FunctionComponent<ProductCardProps> = (props) => {
  return (
    <div tw="bg-white rounded p-6">
      <h2>{props.name}</h2>
    </div>
  );
};

export default ProductCard;
