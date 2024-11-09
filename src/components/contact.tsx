import "../style/contact.css";
function Contact(){
    return(
        <main className="con-main">
            <div className="con-form">
                <h1 className="con-title">Contact Us</h1>
                <form action="" className="form">
                   <input type="text" placeholder="Enter your Name"/> 
                   <input type="email" placeholder="Enter your e-mail"/> 
                   <input className="msg" type="text" placeholder="Your Message"/> 
                    </form> 
                    <button className="btn-sub">Submit</button>
            </div>
        </main>
    )
}
export default Contact