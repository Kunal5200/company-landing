import technology from "@/images/technology.svg";
import management from "@/images/management.svg";
import website from "@/images/website.svg";
import tracking from "@/images/tracking.svg";
import team from "@/images/team.svg";
import project from "@/images/projects.svg";
import award from "@/images/awards.svg";
import review from "@/images/review.svg";
import testi1 from "@/images/testimonial/img1.jpg";
import team1 from "@/images/client/img1.jpg";
import team2 from "@/images/client/img2.jpg";
import team3 from "@/images/client/img3.jpg";
import team4 from "@/images/client/img4.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import muast from "@/images/clients/muast.png";
import chatBot from "@/images/clients/chatbot.png";
import wattse from "@/images/clients/wattse.png";
import soluck from "@/images/clients/soluck.png";
import zenTrade from "@/images/clients/zentrade.png";
import linkify from "@/images/clients/linkify.png";
import nextech from "@/images/clients/nextech.png";
import yuhverse from "@/images/clients/yuhverse.png";
import {
  AccessTimeOutlined,
  LocationOnOutlined,
  SettingsPhoneOutlined,
} from "@mui/icons-material";
let data = {
  services: [
    {
      img: technology,
      heading1: "Technology",
      heading2: "Solution",
      description: "Developing a comprehensive IT strategy that aligns.",
    },
    {
      img: management,
      heading1: "It Management",
      heading2: "Services",
      description: "Developing a comprehensive IT strategy that aligns.",
    },
    {
      img: website,
      heading1: "Website & Mobile",
      heading2: "App Design",
      description: "Developing a comprehensive IT strategy that aligns.",
    },
    {
      img: tracking,
      heading1: "Data Tracking",
      heading2: "Security",
      description: "Developing a comprehensive IT strategy that aligns.",
    },
  ],
  counterText: [
    {
      img: team,
      end: 200,
      heading: "Team Member",
    },
    {
      img: project,
      end: 10,
      heading: "complete Project",
    },
    {
      img: award,
      end: 20,
      heading: "Winning award",
    },
    {
      img: review,
      end: 900,
      heading: "client review",
    },
  ],
  testimonials: [
    {
      img: testi1,
      testimonials:
        ' "Customer review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty"',
      name: "Edward Denial",
      designation: "Cloud Architect",
    },
    {
      img: testi1,
      testimonials:
        ' "Customer review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty"',
      name: "Edward Denial",
      designation: "Cloud Architect",
    },
    {
      img: testi1,
      testimonials:
        ' "Customer review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty"',
      name: "Edward Denial",
      designation: "Cloud Architect",
    },
    {
      img: testi1,
      testimonials:
        ' "Customer review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty"',
      name: "Edward Denial",
      designation: "Cloud Architect",
    },
    {
      img: testi1,
      testimonials:
        ' "Customer review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty"',
      name: "Edward Denial",
      designation: "Cloud Architect",
    },
    {
      img: testi1,
      testimonials:
        ' "Customer review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty"',
      name: "Edward Denial",
      designation: "Cloud Architect",
    },
  ],
  teams: [
    {
      img: team1,
      name: "Ambert Daniel",
      designation: "CEO & Founder",
      socialAccounts: [
        { icon: <FaFacebookF /> },
        {
          icon: <FaInstagram />,
        },
        {
          icon: <FaLinkedinIn />,
        },
        {
          icon: <FaTwitter />,
        },
      ],
    },
    {
      img: team2,
      name: "Milano Digits",
      designation: "Network Engineer",
      socialAccounts: [
        { icon: <FaFacebookF /> },
        {
          icon: <FaInstagram />,
        },
        {
          icon: <FaLinkedinIn />,
        },
        {
          icon: <FaTwitter />,
        },
      ],
    },
    {
      img: team3,
      name: "Daniel Smith",
      designation: "Digital Marketing",
      socialAccounts: [
        { icon: <FaFacebookF /> },
        {
          icon: <FaInstagram />,
        },
        {
          icon: <FaLinkedinIn />,
        },
        {
          icon: <FaTwitter />,
        },
      ],
    },
    {
      img: team4,
      name: "Latina Lucas",
      designation: "Product Manager",
      socialAccounts: [
        { icon: <FaFacebookF /> },
        {
          icon: <FaInstagram />,
        },
        {
          icon: <FaLinkedinIn />,
        },
        {
          icon: <FaTwitter />,
        },
      ],
    },
  ],
  brands: [
    {
      img: muast,
    },
    {
      img: chatBot,
    },
    {
      img: wattse,
    },
    {
      img: soluck,
    },
    {
      img: zenTrade,
    },
    {
      img: linkify,
    },
    {
      img: nextech,
    },
    {
      img: yuhverse,
    },
  ],
  footerSection: [
    {
      icon: <LocationOnOutlined sx={{ fontSize: 25 }} />,
      heading: "Location",
      description: "258 Daniel Mansion 258 Berlin Germany",
    },
    {
      icon: <AccessTimeOutlined />,
      heading: "Working Hours",
      description: "Weekdays 10am-7pm",
    },
    {
      icon: <SettingsPhoneOutlined />,
      heading: "Contact Us",
      description: `tronixinfo@tronix.com `,
    },
  ],
};

export default data;
