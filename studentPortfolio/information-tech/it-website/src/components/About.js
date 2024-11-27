import React from 'react';
import './about.css';


//Create about function element
function About() {
    return(
       <section className="aboutContainer">
           <h2>About Cloud Ware</h2>

           {/*Create video container first*/}
           <div className="videoContainer">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9VAIFBs8qDY?si=Hpkd6Bjl-GYkbmVz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </div>

           {/*Create our story div*/}
           <div className="storyContainer">
                <h3>Our Story</h3>

                {/*Create our story paragraph*/}
                <p>
                    CloudWare is a leading provider of cloud-based IT solutions for businesses of all sizes. Our mission is to empower organizations with the tools they need to succeed in the digital age.
                    That is not all we do. We also provide mentor ship to young students in need that look to enroll with us for classes in their future.
                    Here at CloudWare, we take pride in being your local Floridian IT and academic institution.
                    We as an organization have a vision to provide the best experience to our students make sure they are fully prepared for the future that lies ahead with
                    up to date learning and practical real life experience.
                </p>
           </div>

           {/*Create infinite scroll banner*/}
           <div className="scrollBanner">
                <div className="bannerContent" style={{'--marquee-speed': '25s', '--direction': 'scroll-left'}} role="marquee">
                    <div className="bannerText">
                        <div className="bannerItem">Empowering Innovation with CloudWare • Seamless Solutions in the Cloud • Empowering Innovation with CloudWare • Seamless Solutions in the Cloud •</div>
                        <div className="bannerItem">Empowering Innovation with CloudWare • Seamless Solutions in the Cloud • Empowering Innovation with CloudWare • Seamless Solutions in the Cloud •</div>
                    </div>
                </div>
           </div>

           {/*Create our team div*/}
           <div className="teamContainer">
                <h3>Faculty Spotlight</h3>
           </div>
       </section>
    );
}
export default About;
