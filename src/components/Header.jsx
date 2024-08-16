import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

const listNavbar = [
  {
    title: "Climate Solutions",
    items: [
      {
        label: "Tree Planting",
        link: "https://www.carbonethics.co/tree-planting",
      },
      {
        label: "Nature-based Carbon Project",
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
    title: "Climate Resources",
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
        label: "FAQ",
        link: "https://www.carbonethics.co/faq",
      },
    ],
  },
];

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative flex justify-between items-center bg-[#0A3E6D] py-4 px-4">
      <img src="/images/Logo-CE-White.svg" alt="" className="w-64" />
      <div className="flex items-center gap-10">
        <div className="relative flex items-center gap-[90px]">
          {listNavbar.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link className="text-lg font-normal text-white" cursor="pointer">
                {item.title}
              </Link>
              {hoveredIndex === index && item.items.length > 0 && (
                <div className="absolute left-0 top-full mt-2 p-2 bg-black bg-opacity-50 text-white shadow-lg w-52 z-50">
                  <div className="">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        className="block px-4 py-2 text-lg font-normal hover:underline"
                        onClick={() => window.open(subItem.link, "_blank")}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button variant="primary">Plant Now</Button>
        </div>
        <img src="/images/Logo-User.svg" alt="" className="w-10" />
      </div>
    </div>
  );
}
