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
