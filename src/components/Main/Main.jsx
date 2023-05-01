import React from "react";
import illustrationMobile from "../../assets/images/image-web-3-mobile.jpg";
import illustrationDesktop from "../../assets/images/image-web-3-desktop.jpg";
import Button from "../../shared/Button/Button";
import New from "../../shared/New/New";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <section className="main__principal">
        <img
          src={illustrationMobile}
          alt="Illustrations"
          className="main__illustration main__illustration--mobile"
        />
        <img
          src={illustrationDesktop}
          alt="Illustrations"
          className="main__illustration main__illustration--desktop"
        />
        <div className="main__div">
          <h1 className="main__title">The Bright Future of Web 3.0?</h1>
          <div className="main__info">
            <p className="main__description">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Button name="read more" />
          </div>
        </div>
      </section>
      <section className="main__new">
        <h2 className="main__subtitle">New</h2>
        <New
          title="Hidrogen VS Electric Cars"
          text="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <New
          title="The downside of AI Artistry"
          text="What are the possible adverse effects of on-demand AI image generation"
        />
        <New
          title="Is VS Funding Drying Up"
          text="Private founding by VC firms is down 50% YOY. We take a look at what that means"
        />
      </section>
    </main>
  );
};

export default Main;
