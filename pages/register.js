import Register from "../Component/Register";
import Layout from "../Component/Layout";

export default function register({categories}){
    return(
        <div>
            <Layout categories={categories}>
            <Register/>
            </Layout>
        </div>
    )
}
