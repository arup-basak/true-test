import React from 'react';
import type { GetServerSideProps } from 'next';
import Product from '@/components/Product';
import { ProductProps } from '@/libs/interface';
import Head from 'next/head';

interface Repo {
  name: string;
  stargazers_count: number;
}

export const getServerSideProps: GetServerSideProps<{ repo: Repo }> = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const repo = await res.json();
  return { props: { repo } };
};

const Index = ({ repo }: { repo: ProductProps[] }) => {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
      <div className='w-[100%]'>
        <div className='p-2 mobile:px-4 grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-2 desktop:w-3/5 tablet:w-4/5 m-auto'>
          {repo.map((product, i) => {
            return <Product
              key={i.toString()}
              heading={product.heading}
              price={product.price} />
          })}
        </div>
      </div>
    </>

  )
};

export default Index;
