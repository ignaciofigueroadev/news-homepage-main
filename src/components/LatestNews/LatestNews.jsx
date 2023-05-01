import React from "react";
import "./LatestNews.scss";
import Card from "../../shared/Cards/Card";
import gameGamingGrowthIllustration from "../../assets/images/image-gaming-growth.jpg";
import retroPcsIllustration from "../../assets/images/image-retro-pcs.jpg";
import topLaptopsIllustration from "../../assets/images/image-top-laptops.jpg";

const LatestNews = () => {
  return (
    <section className="latest-news">
      <Card
        image={gameGamingGrowthIllustration}
        number="01"
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades"
      />
      <Card
        image={retroPcsIllustration}
        number="02"
        title="Top 10 Laptops of 2022"
        description="Our best picks for various needs and budgets"
      />
      <Card
        image={topLaptopsIllustration}
        number="03"
        title="The Growth of Gaming"
        description="How to pandemic has sparked fresh oportunities"
      />
    </section>
  );
};

export default LatestNews;
