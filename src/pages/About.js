
import './About.css';


function About() {
    return (
       <>
       <div>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 className="text-align:center">Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">

                        <div className="container">
                            <h2>Utsav Vyas</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>su123@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">

                        <div className="container">
                            <h2>Disha Patani</h2>
                            <p className="title">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>rd@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">

                        <div className="container">
                            <h2>Salu bhai</h2>
                            <p className="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>dp@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        
            
        </div>
          
          </>
        


    );
}
export default About