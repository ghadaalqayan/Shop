import Layout from "../../Component/Layout";
import Head from "next/head"
import SingleProductDetail from "../../Component/SingleProductDetail";



export default function SingleProductsDetail({product}){

    return(
        <Layout>
            <Head>
                <title>GAIA|Product</title>
            </Head>
        <SingleProductDetail product={product} />


        </Layout>
    )
}

export async function getStaticPaths() {

    const res = await fetch ('https://dummyjson.com/products')
    const products = await res.json()
    const allProduct = products.products
    

    console.log(products)


    return {
        paths:
            allProduct.map((product) =>{
                return { params: {single_product_id:`${ product.id }` } }
            }),

        fallback: false
    };


}
export async function getStaticProps({params}) {



    const data =  await fetch('https://dummyjson.com/products/' + params.single_product_id)
    const product = await data.json()
    console.log(product)


    return {
        props: {
            product,

        },
    }
}