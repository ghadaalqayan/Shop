import Image from "next/image"
import styles from "../styles/Home.module.scss"
import Link from "next/link";
import gaia2 from "../Public/images/gaia2.png"
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr />
            <div className="flex flex-col flex-wrap gap-10 md:gap-24 text-black ">
                <div className="flex flex-wrap gap-16 space-y-12">
                    <div className="mt-12">
                        <Link href="/">
                            <Image src={gaia2} alt="logo" width="60" height="60"  />
                        </Link>

                        <p className="mt-8 ml-2">A beautiful landing page <br /> </p>
                    </div>
                    <div>
                        <h1 className="text-2xl  leading-[50px]  pb-6"><strong>About</strong></h1>
                        <p className="font-normal leading-[34px] text-[18px]">We like to do business <br /> at Codelander HQ to our <br />
                            clients' satisfaction. </p>
                    </div>
                    <div>
                        <h1 className="text-2xl  leading-[50px]  pb-6"><strong>Contact Us </strong></h1>

                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 justify-center">

                                <i className="fa-solid fa-location-pin text-black"></i>
                                123 Business Centre
                            </li>
                            <li className="flex items-center gap-2 justify-center">
                                <i className="fa-solid fa-phone text-black"></i>
                                (+966) 5992442
                            </li>
                            <li className="flex items-center gap-2 justify-center">
                                <i className="fa-solid fa-envelope text-black"></i>
                                    contact@gaia.com
                            </li>
                        </ul>
                    </div>
                   
                </div>
                <div className="text-center">
                    <h1>
                        © 2020  shop™. All Rights Reserved.
                    </h1>
                </div>
            </div>
        </footer>
    )
}
