/** @jsx h */

import blog, { h } from "blog";
import { Section } from './components/Section.jsx';
import "https://deno.land/x/dotenv@v3.2.0/load.ts";


blog({
  author: "Rajdeep singh",
  title: "Hello, my name is Kaan",
  description: "Welcome to my blog",
  // avatar:`${Deno.env.get("URL")}assets/logos/sanji.png`,
  avatar:"https://avatars.githubusercontent.com/u/62032779?s=400&u=760a089e2f6f0316f96dc0e5e6a24cb979d66457&v=4",
  avatarClass: "rounded-full",
  coverTextColor:"black",
  links: [
    { title: "Email", url: "mailto:kaanakgundogdu@gmail.com" },
    { title: "GitHub", url: "https://github.com/kaanakgundogdu" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/kaanakgundogdu" },
  ],
  lang: "en",
  favicon: `${Deno.env.get("URL")}favicon.ico`,
  section: <Section/>,
  theme:"auto",
  cover:`${Deno.env.get("URL")}assets/blog-images/white-bg.jpg`,
  ogImage: {
    url: `${Deno.env.get("URL")}assets/logos/Frame.png`,
    twitterCard:"summary_large_image" 
  },
  style:".markdown-body ul, .markdown-body ol { list-style: disc !important;}"
});
