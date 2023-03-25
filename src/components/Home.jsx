import React from "react";
import vg from "../assets/2.webp.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase *he
            proplem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3 " id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            harum eveniet nemo blanditiis nisi similique at voluptatem fugit
            temporibus molestias perferendis veritatis explicabo architecto
            mollitia, quod ab sed qui eaque facilis unde, cum quae molestiae
            reprehenderit in! Eaque enim saepe soluta, voluptatum non, similique
            quis reprehenderit quisquam, rerum cupiditate at.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google </p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon </p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube </p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
