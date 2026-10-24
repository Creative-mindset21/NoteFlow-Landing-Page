import img1 from "../assets/headshots/img-1.webp";
import img2 from "../assets/headshots/img-2.webp";
import img3 from "../assets/headshots/img-3.webp";
import img4 from "../assets/headshots/img-4.webp";
import img5 from "../assets/headshots/img-5.webp";
import img6 from "../assets/headshots/img-6.webp";
import img7 from "../assets/headshots/img-7.webp";
import img8 from "../assets/headshots/img-8.webp";
import img9 from "../assets/headshots/img-9.webp";
import img10 from "../assets/headshots/img-10.webp";
import img11 from "../assets/headshots/img-11.webp";
import img12 from "../assets/headshots/img-12.webp";
import img13 from "../assets/headshots/img-13.webp";
import img14 from "../assets/headshots/img-14.webp";
import img15 from "../assets/headshots/img-15.webp";

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

import {
  FiInfo,
  FiCpu,
  FiUsers,
  FiShield,
  FiSmartphone,
  FiTag,
  FiGift,
  FiRefreshCw,
  FiFolder,
  FiMic,
  FiBell,
  FiSearch,
  FiLayers,
  FiCloud,
  FiMessageSquare,
  FiDownload,
  FiShare2,
  FiZap,
} from "react-icons/fi";

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

export const faqQuestions = [
  // General
  {
    type: "General",
    icon: FiInfo,
    question: "What is NoteFlow?",
    answer:
      "NoteFlow is an AI-powered note-taking application designed to help individuals and teams organize, manage, and retrieve notes effortlessly.",
  },
  {
    type: "General",
    icon: FiCpu,
    question: "How does NoteFlow use AI to enhance note-taking?",
    answer:
      "NoteFlow uses AI to automatically categorize, summarize, and tag your notes, making it easier to find exactly what you need. Its intelligent search functionality helps you locate information by context, keywords, or themes, ensuring that your notes are always organized and accessible.",
  },
  {
    type: "General",
    icon: FiUsers,
    question: "Can NoteFlow be used for team collaboration?",
    answer:
      "Absolutely! NoteFlow is designed to support both individual users and team collaboration. You can share notes, collaborate in real time, assign tasks, and track progress within the platform. This makes it a perfect solution for both personal and professional use.",
  },
  {
    type: "General",
    icon: FiShield,
    question: "Is my data secure with NoteFlow?",
    answer:
      "Yes, your privacy and data security are our top priority. NoteFlow uses industry-standard encryption to protect your notes and information. Additionally, we have strict privacy policies in place to ensure that your data is never shared without your consent.",
  },
  {
    type: "General",
    icon: FiSmartphone,
    question: "Can I access NoteFlow on multiple devices?",
    answer:
      "Yes, you can access NoteFlow from any device, including your computer, tablet, and smartphone. Our app syncs seamlessly across platforms, so your notes are always up-to-date and available whenever you need them.",
  },

  // Pricing
  {
    type: "Pricing",
    icon: FiTag,
    question: "What pricing plans does NoteFlow offer?",
    answer:
      "NoteFlow offers several pricing tiers to meet the needs of both individuals and teams. We have a free plan with basic features, as well as premium plans that provide advanced features like unlimited storage, team collaboration tools, and more. You can find detailed information about each plan on our Pricing page.",
  },
  {
    type: "Pricing",
    icon: FiGift,
    question: "Is there a free trial available for NoteFlow?",
    answer:
      "Yes! We offer a 7-day free trial of our premium plan, so you can explore all of the advanced features without any commitment. If you choose not to continue, you can simply switch back to the free plan at any time.",
  },
  {
    type: "Pricing",
    icon: FiRefreshCw,
    question: "Can I change or cancel my subscription anytime?",
    answer:
      "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time through your account settings. If you decide to cancel, you will still have access to your plan’s features until the end of your current billing cycle.",
  },

  // Features
  {
    type: "Features",
    icon: FiFolder,
    question: "How does NoteFlow's Smart Organization feature work?",
    answer:
      "NoteFlow's Smart Organization feature uses advanced AI to automatically categorize and tag your notes based on key topics and themes. The AI-driven analysis ensures that your notes are organized in a way that makes them easy to search and retrieve, saving you time when you need to find specific information.",
  },
  {
    type: "Features",
    icon: FiMic,
    question:
      "Can I dictate notes using the Voice-to-Text Transcription feature?",
    answer:
      "Yes! NoteFlow’s Voice-to-Text Transcription feature lets you dictate notes in real time. Whether you’re in a meeting, on the go, or brainstorming ideas, simply speak, and NoteFlow will automatically convert your speech into organized text. This feature makes capturing ideas effortless and hands-free.",
  },
  {
    type: "Features",
    icon: FiBell,
    question: "How do Contextual Reminders help me stay on top of tasks?",
    answer:
      "Contextual Reminders use AI to analyze your notes and automatically recognize important tasks, deadlines, and follow-up actions. Based on this analysis, NoteFlow will send you timely reminders to ensure you never miss a critical deadline or action point.",
  },
  {
    type: "Features",
    icon: FiSearch,
    question:
      "Can I search for specific notes or information using the AI-powered features?",
    answer:
      "Yes! With NoteFlow’s intelligent search functionality, you can search for specific keywords, topics, or even context-based information. The AI not only looks for exact matches but also understands the context of your notes, helping you find relevant information quickly and efficiently.",
  },

  // Integrations
  {
    type: "Integrations",
    icon: FiLayers,
    question: "What integrations does NoteFlow support?",
    answer:
      "NoteFlow integrates with a wide range of tools, including popular apps like Google Drive, Microsoft OneDrive, Slack, Trello, and more. These integrations allow you to sync your notes with your existing workflow and collaborate seamlessly across platforms.",
  },
  {
    type: "Integrations",
    icon: FiCloud,
    question:
      "Can I sync my notes with cloud storage services like Google Drive or Dropbox?",
    answer:
      "Yes, NoteFlow allows you to sync your notes with cloud storage services like Google Drive, Dropbox, and OneDrive. This integration ensures that your notes are securely backed up and easily accessible across all your devices.",
  },
  {
    type: "Integrations",
    icon: FiMessageSquare,
    question:
      "Does NoteFlow integrate with team collaboration tools like Slack?",
    answer:
      "Absolutely! NoteFlow integrates with Slack, allowing you to share notes and collaborate in real time with your team. You can even create reminders or action items directly from your notes and have them sent to your Slack channels.",
  },
  {
    type: "Integrations",
    icon: FiDownload,
    question: "Can I import existing notes from other platforms into NoteFlow?",
    answer:
      "Yes, you can easily import your existing notes from platforms like Evernote, Google Keep, and Microsoft OneNote into NoteFlow. This ensures a smooth transition without losing any of your important information.",
  },
  {
    type: "Integrations",
    icon: FiShare2,
    question:
      "Is it possible to export notes from NoteFlow to other formats or apps?",
    answer:
      "Yes, NoteFlow allows you to export your notes in various formats, including PDF, Word, and plain text. You can also export your notes to other apps like Google Docs or Microsoft Word, making it easy to share or further edit your content.",
  },
  {
    type: "Integrations",
    icon: FiZap,
    question: "Will NoteFlow integrate with other apps in the future?",
    answer:
      "We are always working to expand our integration offerings to meet the needs of our users. We frequently update NoteFlow to support new and popular tools, so be sure to check back for new integrations that may enhance your experience.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Emily Thompson",
    title: "Senior Marketing Manager",
    testimonial:
      "NoteFlow has completely transformed the way I manage my work notes. The AI-powered organization feature makes it so easy to find what I need, even weeks after the fact.",
    rating: 5,
    image: img1,
  },
  {
    id: 2,
    name: "Michael Carter",
    title: "Product Designer",
    testimonial:
      "As a designer, I need a tool that helps me keep track of brainstorming sessions and project notes. NoteFlow’s voice-to-text transcription is a game-changer, allowing me to capture ideas while on the go. It has boosted my productivity tenfold!",
    rating: 5,
    image: img2,
  },
  {
    id: 3,
    name: "Sarah Lee",
    title: "Business Analyst",
    testimonial:
      "I love how NoteFlow integrates with tools like Google Drive and Slack. It makes collaboration with my team so much smoother. The contextual reminders have helped me stay on top of critical deadlines.",
    rating: 5,
    image: img3,
  },
  {
    id: 4,
    name: "Jonathan Moore",
    title: "Software Engineer",
    testimonial:
      "The smart organization of my notes is impressive. I used to waste time searching for information, but now NoteFlow does the heavy lifting, automatically categorizing everything. It’s an indispensable part of my workflow.",
    rating: 5,
    image: img4,
  },
  {
    id: 5,
    name: "Rachel Foster",
    title: "Project Manager",
    testimonial:
      "NoteFlow has made managing multiple projects so much easier. I can quickly access and organize my notes, and the contextual reminders keep me on track. It’s the best tool I’ve found for staying organized.",
    rating: 5,
    image: img5,
  },
  {
    id: 6,
    name: "Daniel Harris",
    title: "Entrepreneur",
    testimonial:
      "As a startup founder, my days are packed with meetings and ideas. NoteFlow’s voice-to-text feature lets me capture thoughts while I’m on the move. Plus, the cloud storage sync keeps everything safe and easily accessible.",
    rating: 5,
    image: img6,
  },
  {
    id: 7,
    name: "Olivia Carter",
    title: "Content Strategist",
    testimonial:
      "I’ve tried many note-taking apps, but none compare to NoteFlow. The AI-driven categorization helps me keep my content ideas organized and searchable, saving me hours every week. Highly recommended!",
    rating: 5,
    image: img7,
  },
  {
    id: 8,
    name: "Thomas Williams",
    title: "UX/UI Designer",
    testimonial:
      "The voice-to-text transcription is incredibly accurate and saves me so much time when documenting meetings. Plus, I love how seamlessly it integrates with tools like Trello and Slack. NoteFlow is a must-have for anyone in design.",
    rating: 5,
    image: img8,
  },
  {
    id: 9,
    name: "Jessica Gonzalez",
    title: "Sales Executive",
    testimonial:
      "I rely heavily on my notes during client calls and follow-ups. The ability to automatically receive reminders based on my notes has made my follow-up process much smoother and more efficient. NoteFlow has been a game-changer!",
    rating: 5,
    image: img9,
  },
  {
    id: 10,
    name: "Aaron Mitchell",
    title: "Customer Support Lead",
    testimonial:
      "I can’t say enough about how helpful NoteFlow’s integrations are. Syncing my notes with Google Drive and other apps has streamlined my work processes. It’s helped me stay organized and efficient in an ever-changing environment.",
    rating: 5,
    image: img10,
  },
  {
    id: 11,
    name: "Grace Stevens",
    title: "HR Manager",
    testimonial:
      "NoteFlow has been a lifesaver for organizing employee notes and meeting summaries. The AI-driven organization automatically categorizes everything, so I no longer have to worry about sorting through piles of documents. It's incredibly intuitive!",
    rating: 5,
    image: img11,
  },
  {
    id: 12,
    name: "Ben Turner",
    title: "Freelance Writer",
    testimonial:
      "I’m always jotting down ideas and notes for various writing projects. The voice-to-text feature lets me capture my thoughts while I’m out and about. I love that everything syncs in real-time and is always available when I need it.",
    rating: 5,
    image: img12,
  },
  {
    id: 13,
    name: "Katherine Evans",
    title: "Marketing Director",
    testimonial:
      "With NoteFlow, I’m able to keep track of ideas, strategies, and feedback effortlessly. The contextual reminders are perfect for ensuring I follow up on key tasks and deadlines. It’s become an essential part of my daily routine.",
    rating: 5,
    image: img13,
  },
  {
    id: 14,
    name: "Lucas King",
    title: "CEO",
    testimonial:
      "As someone who juggles multiple responsibilities, NoteFlow keeps me organized without any hassle. The seamless integrations with tools like Slack and Google Drive allow my team and I to stay in sync and work more efficiently.",
    rating: 5,
    image: img14,
  },
  {
    id: 15,
    name: "Natalie James",
    title: "Graphic Designer",
    testimonial:
      "NoteFlow's ability to capture and organize my notes in such a detailed yet easy-to-use way has made a huge difference in my creative process. Whether I'm brainstorming or taking project notes, it’s my go-to app for staying organized.",
    rating: 5,
    image: img15,
  },
];

export const footerLinks = [
  {
    id: 0,
    title: "Home",
    links: [
      { label: "Companies", href: "#companies" },
      { label: "Features", href: "#features" },
      { label: "FAQ", href: "#faq" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    id: 1,
    title: "Pricing",
    links: [
      { label: "Compare Plans", href: "#pricing" },
      { label: "Pricing FAQs", href: "#pricing-faqs" },
      { label: "Free Trial", href: "#free-trial" },
      { label: "Billing & Payments", href: "#billing" },
    ],
  },
  {
    id: 2,
    title: "About",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    id: 3,
    title: "Community",
    links: [
      { label: "Join the Forum", href: "#forum" },
      { label: "Customer Support", href: "#support" },
      { label: "User Stories", href: "#stories" },
      { label: "Blog & Resources", href: "/blog" },
    ],
  },
];
