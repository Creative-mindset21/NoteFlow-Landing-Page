import img1 from "../assets/headshots/img-1.webp";
import img2 from "../assets/headshots/img-2.webp";
import img3 from "../assets/headshots/img-3.webp";
import img4 from "../assets/headshots/img-4.webp";
import img5 from "../assets/headshots/img-5.webp";

import company1 from "../assets/logos/Amazon.webp";
import company2 from "../assets/logos/Chase.webp";
import company3 from "../assets/logos/ExxonMobile.webp";
import company4 from "../assets/logos/Microsoft.webp";
import company5 from "../assets/logos/Netflix.webp";
import company6 from "../assets/logos/Vice.webp";
import company7 from "../assets/logos/VISA.webp";
import company8 from "../assets/logos/Walmart.webp";

import about1 from "../assets/graphics/SmartOrganization.webp";
import about2 from "../assets/graphics/ContextualReminders.webp";

export const navLinks = [
  {
    id: 0,
    name: "Home",
    to: "/",
  },

  {
    id: 1,
    name: "Pricing",
    to: "#pricing",
  },
  {
    id: 2,
    name: "About",
    to: "#about",
  },
  {
    id: 3,
    name: "Community",
    to: "#community",
  },
];

export const trustedImgs = [img1, img2, img3, img4, img5];

export const companyList = [
  {
    imgSrc: company1,
    alt: "Amazon",
  },

  {
    imgSrc: company2,
    alt: "Chase",
  },

  {
    imgSrc: company3,
    alt: "ExxonMobile",
  },

  {
    imgSrc: company4,
    alt: "Microsoft",
  },

  {
    imgSrc: company5,
    alt: "Netflix",
  },

  {
    imgSrc: company6,
    alt: "Vice",
  },

  {
    imgSrc: company7,
    alt: "VISA",
  },

  {
    imgSrc: company8,
    alt: "Walmart",
  },
];

export const aboutDetails = [
  {
    id: 1,
    title: "Smart Organization",
    desc: "Automatically categorize and tag your notes using AI-driven analysis. NoteFlow intelligently identifies key topics and organizes your content, making it easy to find and retrieve your notes when you need them most.",
    imgSrc: about1,
    order: 2,
  },

  {
    id: 2,
    title: "Contextual Reminders",
    desc: "Stay on top of important tasks with AI-powered reminders that adapt to the context of your notes. NoteFlow recognizes deadlines, follow-ups, and key actions from your notes and sends timely alerts to ensure nothing slips through the cracks.",
    imgSrc: about2,
    order: 1,
  },
];
