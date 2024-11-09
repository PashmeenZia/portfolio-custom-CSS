import"../style/hero.css";
import Image from "next/image";
import"../style/about.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function About(){
    return(
        <div className="header-container">
           <div className="header-boxes-container">
            {/*left */}
            <div>
             <Image className="header-image"   src={"/image/logo.jpg"}
              height={250}
               width={200}
                alt="profile"/>
                <div className="social-icons">
                <FaFacebook className="f-icon" />
                <FaLinkedinIn className="in-icon" />
                <IoLogoGithub className="g-icon"/>
                </div>
            </div>
            {/* right */}
            <div className="hero-right-div">
                <h1 className="header-title">About Us
                </h1>
                <p className="head-des">I am housewife and have studied B.COM at Karachi University. Currently I study at Governor House. I have successfully completed course Html Css and Typescript and now I am preparing Next.js.Having successfull finished my first quarter.I continue to grow my journey as a Frontend Development.</p>
                
            </div>
           </div>
        </div>
    )
}
export default About