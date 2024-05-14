import React from "react";
import AchievementV2 from "../achievementv2";
import Achievev2 from "../achievev2";
import Author from "../author";
import ChapterPreviewV2 from "../chapter-preview-v2";
import Chapterv2 from "../chapterv2";
import Contact from "../contact";
import Ctav2 from "../ctav2";
import FunFacts from "../fun-facts";
import Footer from "../global/footer";
import Header from "../global/header";
import Herov2 from "../herov2";
import Pricing from "../pricing";
import Testimonial from "../testimonial";
import Brands from "../brands";
import Chapter from "../chapter";
import ChapterPreview from "../chapter-preview";
import Booksv2 from "../booksv2";
import Portfolio from "../portfolio";
import Booksv1 from "../booksv1";
import MeetTheTeam from "./aboutUs/meetTheTeam";
import Team from "../team";

const Version02 = ({ header, footer }) => {
  const { menu } = footer;
  return (
    <>
      <Header header={header} />
      <Herov2 isBg="yes" />
      <Brands isBg="" />
      <Chapter isBg="yes" />
      <ChapterPreview isBg="" />
      <MeetTheTeam isBg="" />
      <AchievementV2 isBg="yes" />
      <Author isBg="" />
      <Booksv1 isBg="yes"/>
      <Team isBg="yes"/>
      <ChapterPreviewV2 isBg="yes" />
      <Achievev2 isBg="" />
      <FunFacts isBg="" />
      <Testimonial isBg="yes" />
      <Contact isBg="" />
      <Footer isBg="yes" menu={menu} />
    </>
  );
};

export default Version02;
