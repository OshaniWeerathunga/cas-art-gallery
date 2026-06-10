import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  image1,
  image2,
  image3,
  image4,
  image5,
  catalog,
  number1,
  number2,
  number3,
  number4,
  number5

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "catalog",
    title: "Catalog",
  },
  {
    id: "instruction",
    title: "Instructions",
  },
  {
    id: "contact",
    title: "Sales Form",
  },
  
];

const services = [
  {
    title: "Painting",
    size: "70*100cm",
    icon: image1,
  },
  {
    title: "Painting",
    size: "40*60cm",
    icon: image2,
  },
  {
    title: "Painting",
    size: "50*70cm",
    icon: image3,
  },
  {
    title: "Wood art",
    size: "30*30cm",
    icon: image4,
  },
  {
    title: "Painting",
    size: "20*30cm",
    icon: image5,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "CAS Art Catalogue SOP:",
    company_name: "",
    icon: number1,
    iconBg: "#383E56",
    date: "",
    points: [
      
        "To support Afghan guests at CAS, the International Organization for Migration (IOM), the U.S. State Department’s Coordinator for Afghan Relocation Efforts (CARE), and the Bureau of Population, Refugees, and Migration (PRM) are facilitating the sale of artwork through a catalogue featuring over 300 pieces.**One hundred percent of sales will go directly to the artists.**"

    ],
  },
  {
    title: "Circulation:",
    company_name: "",
    icon: number2,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "To encourage sales, the catalogue will be shared with organizations throughout Doha. To manage requests effectively, payment and artwork handover will be coordinated through designated focal points from each organization.",
    ],
  },
  {
    title: "Buying a Painting:",
    company_name: "",
    icon: number3,
    iconBg: "#383E56",
    date: "",
    points: [
      "The catalogue will be “live” until 25 June 2026. During this time, we will receive requests via the form on the website.",
      "If two or more people request the same piece, the time stamp will determine who receives it. We will update the PDF daily to show which pieces have been sold. If you request a painting that has already been sold, we will contact you.",
      "Please provide your organization’s focal point with the exact cash amount for each artwork you wish to purchase, in U.S. dollars. Payments are collected on behalf of the artists, and no change will be available.",
      "All sales are final; refunds or exchanges cannot be processed.",
    ],
  },
  {
    title: "Delivery:",
    company_name: "",
    icon: number4,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "CAS colleagues will coordinate the delivery date with each organization’s focal point. All payments must be made at the time of delivery.",
    ],
  },
  {
    title: "Shipping:",
    company_name: "",
    icon: number5,
    iconBg: "#383E56",
    date: "",
    points: [
      "We cannot support shipment outside of Doha.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Catalog PDF",
    description:
      "Click on the image to explore the complete catalog with an enhanced viewing experience.",
    
    image: catalog,
    source_code_link: "https://drive.google.com/file/d/17_gXIL6ghWPjilKm16j4kP6c_NxijQEq/view?usp=sharing",
  }
];

export { services, technologies, experiences, testimonials, projects };
