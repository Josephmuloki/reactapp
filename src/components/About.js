import React from "react";
import AboutImg from "../assets/images/about-img.jpg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            Our restaurant maintains a high standard for the quality of its food and makes 
            sure that each meal is of the same quality. 
            Serving delicious meals has helped the restaurant develop a positive image 
            and has encouraged repeat more customers to dine with us.


            </p>
            <p>
                
              High-quality food and smart restaurant menu engineering. 
              Consistent customer service. Thorough staff member training. 
              Attractive restaurant location and ambience
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;