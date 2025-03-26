"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicAcademyContent = [
    {
      title: "Unleash Your Musical Potential with Us!",
      description:
        "Our expert instructors, personalized training, and world-class curriculum ensure that every student discovers their true musical talent. Whether you're a beginner or an aspiring professional, we help you unlock your full potential!",
    },
    {
      title: "Where Passion Meets Excellence!",
      description:
        "At our academy, we combine passion with top-tier training to help students master their instruments and refine their musical skills. Join us to learn from the best and become the musician you aspire to be!",
    },
    {
      title: "A Music Academy That Feels Like Home!",
      description:
        "Our warm and supportive learning environment helps students feel comfortable while they grow their musical abilities. With professional instructors and state-of-the-art facilities, we make learning music a truly enjoyable journey!",
    },
    {
      title: "Learn, Play, and Shine with Us!",
      description:
        "Our academy fosters creativity, discipline, and a deep love for music. We don’t just teach notes—we inspire confidence, performance skills, and a lifelong appreciation for music.",
    },
    {
      title: "A Music Academy That Cares About Your Growth!",
      description:
        "We believe every student is unique, so we tailor our lessons to fit your goals and skill level. Whether you want to perform on stage or play for fun, we support your musical journey with dedication and care.",
    },
    {
      title: "A Step Towards Your Musical Dreams!",
      description:
        "Dream of becoming a musician? We make it possible with high-quality training, expert coaching, and real-world experience. Take your first step with us today!",
    },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicAcademyContent} />
    </div>
  )
}

export default WhyChooseUs