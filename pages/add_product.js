import Layout from "../Component/Layout";
import Head from "next/head"
import AddProductForm from "../Component/AddProductForm";

export default function AddProduct() {
  return (
    <Layout>
      <Head>
        <title>GAIA |Add Product</title>
      </Head>

      <AddProductForm />
      
    </Layout>
  );
}
