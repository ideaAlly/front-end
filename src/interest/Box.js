import React from 'react'

function Box() {
    
    return (
        <>
           <div className="outer">
                <div className="top-part">
                    <h3 id="top-text">Choose your Interests</h3>
                    <div className="Search">
                        <input type="text" placeholder="Search your Domains here..."></input>
                    </div>
                    <div className="container">
                        <button className="btn btn1">Search</button>
                    </div>
                </div>
                <div className="line"></div>
                <div className="Guide"><h4 className="GuideText">Or select from the below.</h4></div>
                <div className="below-outer1">
                    <div className="below-inner-1">
                        <button className="Domains" value="Artificial Intelligence" onClick="">Artificial Intelligence</button>
                        <button className="Domains" value="Machine Learning" onClick="">Machine Learning</button>

                        <button className="Domains" value="Web Development" onClick="">Web Development</button>
                        <button className="Domains" value="Natural Language Processing" onClick="">Natural Language Processing</button>

                            <button className="Domains" value="Deep Learining" onClick="">Deep Learning</button>
                    </div>

                    <div className="below-inner-2">
                    <button className="Domains" value="Big data Analytics" onClick="">Big data Analytics</button>
                        <button className="Domains" value="Bioinformatics" onClick="">Bioinfirmatiics</button>

                        <button className="Domains" value="Cyber Security" onClick="">Cyber Security</button>
                        <button className="Domains" value="Cloud Computing" onClick="">Cloud Computing</button>

                            <button className="Domains" value="Mobile Application development" onClick="">Mobile Application Development</button>
                    </div>

                    <div className="below-inner-3">
                    <button className="Domains" value="Data Sciece" onClick="">Data Science</button>
                        <button className="Domains" value="Database Management" onClick="">Database Management</button>

                        <button className="Domains" value="Computer Networks" onClick="">Computer Networks</button>
                        <button className="Domains" value="Virtual Reality" onClick="">Virtual Reality</button>

                            <button className="Domains" value="Augmented Reality" onClick="">Augmented Reality</button>
                    </div>

                    <div className="below-inner-4">
                    <button className="Domains" value="Internet Of Things" onClick="">Internet Of Things</button>
                        <button className="Domains" value="Blockchain" onClick="">Blockchain</button>

                        <button className="Domains" value="Automation" onClick="">Automation</button>
                        <button className="Domains" value="Ethical Hacking" onClick="">Ethical Hacking</button>

                            <button className="Domains" value="AutoCAD" onClick="">AutoCAD</button>
                    </div>
                </div>

            </div>
            <div className="Submission">
                    <button className="Sub Submit">Next</button>
                </div>
        </>
    )
}


export default Box
