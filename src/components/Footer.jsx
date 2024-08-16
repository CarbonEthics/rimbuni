import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const listFooter = [
  {
    title: "Find Us Here",
    items: [],
  },
  {
    title: "Our Climate Solutions",
    items: [
      {
        label: "Tree Planting",
        link: "https://www.carbonethics.co/tree-planting",
      },
      {
        label: "Carbon Offset",
        link: "https://www.carbonethics.co/nature-based-carbon-project",
      },
      {
        label: "Carbon Consultancy",
        link: "https://www.carbonethics.co/carbon-consultancy",
      },
      {
        label: "Carbon Calculator",
        link: "https://www.carbonethics.co/carbon-calculator",
      },
    ],
  },
  {
    title: "Take Action with Us",
    items: [
      {
        label: "Businesses",
        link: "https://www.carbonethics.co/businesses",
      },
      {
        label: "Individuals",
        link: "https://www.carbonethics.co/individuals",
      },
    ],
  },
  {
    title: "Our Projects & Impacts",
    items: [
      {
        label: "Our Projects",
        link: "https://www.carbonethics.co/our-projects",
      },
      {
        label: "Our Impacts",
        link: "https://www.carbonethics.co/our-impacts",
      },
      {
        label: "Digital Monitoring",
        link: "https://www.carbonethics.co/digital-monitoring",
      },
    ],
  },
  {
    title: "Learn with Us",
    items: [
      {
        label: "Recent Publication",
        link: "https://www.carbonethics.co/recent-publication",
      },
      {
        label: "Carbon Voice Curriculum",
        link: "https://www.carbonethics.co/carbon-voice-curriculum",
      },
      {
        label: "Latest Blog and Press",
        link: "https://www.carbonethics.co/blog-and-press",
      },
    ],
  },
  {
    title: "About Us",
    items: [
      {
        label: "About CarbonEthics",
        link: "https://www.carbonethics.co/about-us",
      },
      {
        label: "Join CarbonEthics",
        link: "https://www.carbonethics.co/join-us",
      },
      {
        label: "Contact Us",
        link: "https://www.carbonethics.co/contact-us",
      },
      {
        label: "FaQ",
        link: "https://www.carbonethics.co/faq",
      },
      {
        label: "Privacy Policy",
        link: "https://www.carbonethics.co/privacy-policy",
      },
    ],
  },
  {
    title: "Keep In Touch!",
    items: [
      {
        label:
          "You will subscribe to our exclusive content on all our carbon conservation efforts and gain access to our newsletter!",
      },
    ],
  },
];

const socialButtons = [
  {
    label: "in",
    link: "https://www.linkedin.com/company/carbonethics/mycompany/verification/",
  },
  { label: "IG", link: "https://www.instagram.com/carbonethics" },
  { label: "YT", link: "http://www.youtube.com/@carbonethics" },
];

export default function Footer() {
  return (
    <div className="bg-[#0A3E6D]">
      <img src="/images/Logo-CE-White.svg" alt="" className="w-64 my-6" />
      <div className="grid grid-cols-7 gap-3 px-5 mr-10">
        {listFooter.map((section, index) => (
          <div key={index}>
            <h1 className="text-lg font-bold text-white mb-5">
              {section.title}
            </h1>
            <div className="flex flex-col gap-4">
              {section.items.length > 0 ? (
                section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-white">
                    {item.link ? (
                      <Link onClick={() => window.open(item.link, "_blank")}>
                        <p>{item.label}</p>
                      </Link>
                    ) : (
                      <p className="text-justify">{item.label}</p>
                    )}
                  </div>
                ))
              ) : (
                <div className="flex gap-4">
                  {socialButtons.map((data, index) => (
                    <Button
                      key={index}
                      variant="none"
                      className="w-12 h-12 rounded-md text-lg text-[#0A3E6D]"
                      onClick={() => window.open(data.link, "_blank")}
                    >
                      {data.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end my-10 mr-8">
        <Button variant="primary" className="w-60 font-semibold">
          Subcribe Now
        </Button>
      </div>
      <div className="text-white font-bold p-8 ml-4">
        <h1>Copyright © 2024 CarbonEthics. All rights reserved.</h1>
      </div>
    </div>
  );
}
