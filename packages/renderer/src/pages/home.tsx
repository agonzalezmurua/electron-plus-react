import React from "react";
import ProductCard from '@components/atoms/ProductCard';
import 'twin.macro'

export default function Home() {
  return (
    <main tw="p-6">
      <section tw="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <ProductCard name="BeThere" description="Do stuff" img="https://via.placeholder.com/80" />
        <ProductCard name="BeThere" description="Do stuff" img="https://via.placeholder.com/80" />
        <ProductCard name="BeThere" description="Do stuff" img="https://via.placeholder.com/80" />
        <ProductCard name="BeThere" description="Do stuff" img="https://via.placeholder.com/80" />
      </section>
    </main>
  );
}
