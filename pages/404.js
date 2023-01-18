import React from "react";
import Link from "next/link";
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Error = () => {
    return(
<>
<Navbar/>
        <section className="flex items-center h-full p-16  mt-36  mb-48">
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl ">
                <span className="sr-only">Error</span>Error
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
            <p className="mt-4 mb-8">But dont worry, you can find plenty of other things on our home page.</p>
            <button class="py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
    <Link href="/">
    <a >Go Home</a>
</Link>
</button>
      
        </div>
    </div>
</section>
<Footer/>
        </>

    )}

        export default Error;



