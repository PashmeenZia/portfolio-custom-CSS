import"../style/hero.css";
import Image from "next/image";


function Hero(){
    return(
        <div className="header-container">
           <div className="header-boxes-container">
            {/*left */}
            <div>
             <Image className="header-image"   src={"/image/logo.jpg"} height={250} width={200} alt="profile"/>
            </div>
            {/* right */}
            <div className="hero-right-div">
                <h1 className="header-title">I'm PashmeenZia 
                    Web-Developer
                </h1>
                <p className="head-des">I,m housewife and have studied B.COM at Karachi University. Currently,I study at Governor House. I've successfully completed course Html,Css and Typescript and now I'm preparing Next.js.Having successfull finished my first quarter.I continue to grow my journey as a Frontend Development.</p>
                <button className="button">Hire Me</button>
            </div>
           </div>
        </div>
    )
}
export default Hero