// main.tsx

/** @jsx h */
import blog, { h } from "blog";
import { Section } from './components/Section.jsx';

blog({
  author: "Rajdeep singh",
  title: "Hello, my name is Rajdeep Singh",
  description: "Nice to meet you",
  avatar:"https://avatars.githubusercontent.com/u/62032779?v=4",
  avatarClass: "rounded-full",
  coverTextColor:"white",
  links: [
    { title: "Email", url: "mailto:officialrajdeepsingh@gmail.com" },
    { title: "GitHub", url: "https://github.com/officialrajdeepsingh" },
    { title: "Twitter", url: "https://twitter.com/Official_R_deep" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/officalrajdeepsingh/" },
  ],
  lang: "en",
  favicon: "favicon.ico",
  section: <Section/>,
  theme:"auto",
  cover:"assets/logos/backgroundbanner.png",
  ogImage: {
    url: "http://localhost:8000/assets/logos/Frame.png",
    twitterCard:  "summary_large_image" 
  },
  style:".markdown-body ul, .markdown-body ol { list-style: disc !important;}"
});