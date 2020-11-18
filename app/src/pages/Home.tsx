import React from "react";
import ProductCard from '@components/atoms/ProductCard';
import 'twin.macro'

const HomePage = () => {
  return (
    <main tw="p-6">
      <h1>Products</h1>
      <section tw="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <ProductCard name="BeThere" description="Do stuff" img="https://via.placeholder.com/80"/>
        <ProductCard name="BeThere" description="Do stuff" img="https://via.placeholder.com/80"/>
        <ProductCard name="BeThere" description="Do stuff" img="https://via.placeholder.com/80"/>
        <ProductCard name="BeThere" description="Do stuff" img="https://via.placeholder.com/80"/>
      </section>
    </main>
  );
}

export default HomePage;