import"../style/education.css"
function Education(){
    return(
        <main className="edu-main">
            <div className="edu-text">
               <h1>Education</h1>
               <p>With a solid foundation in education, I am constantly expanding my knowledge to fuel creativity and innovation in my professional journey.</p>
            </div>
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">University of Karachi</h1>
                    <span>Completed</span>
                    <span className="container">2010</span>
                </div>
                <div className="com">
                    <h1>B.Com</h1>
                    <p>I completed my Bachelor of Commerce (B.Com) degree, which provided me with a strong grounding in business principles, financial management, and economics. This education has equipped me with essential skills and insights into the corporate world, enabling me to make informed decisions and contribute effectively in various business settings.</p>
                </div>
            </div>
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Governor IT Initiative</h1>
                    <span>Student</span>
                    <span className="container-2">2024</span>
                </div>
                <div className="com">
                    <h1>Web 3.0, Metaverse and Artificial Intelligence Course</h1>
                    <p>The Web 3.0, Metaverse, and Artificial Intelligence course explores the future of digital interaction, focusing on decentralized web technologies, immersive virtual environments, and intelligent systems. It provides foundational knowledge and hands-on skills for navigating and innovating within these cutting-edge fields.</p>
                </div>
            </div>
            
        </main>
    )
}
export default Education