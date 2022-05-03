import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Shopinext</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="Plateforme e-commerce réalisé avec next.js et shopify"
        />
        <meta property="og:title" content="Shopinext" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shopinext-ruby.vercel.app/" />
        <meta
          property="og:description"
          content="Plateforme e-commerce réalisé avec next.js et shopify"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Shopinext" />
      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
