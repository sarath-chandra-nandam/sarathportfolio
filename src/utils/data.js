
import frontendIcon from '../Assets/front-end-icon.png';
import backendIcon from '../Assets/back-end-icon.png'; 
import toolsIcon from '../Assets/tools-icon.png';
import softSkillsIcon from '../Assets/skills-icon.png';


export const SKILLS = [
    {
        title: "Web Designing",
        icon: frontendIcon,
        skills: [
            { skill: "HTML,CSS", percentage: "80%" },
            { skill: "JavaScript", percentage: "50%" },
            { skill: "React.js", percentage: "80%" },
            { skill: "Flutter", percentage: "50%" },
        ]
    },
    {
        title: "Video Editing",
        icon: backendIcon, 
        skills: [
            { skill: "Filmora", percentage: "90%" },
            { skill: "Premier Pro", percentage: "70%" },
            { skill: "After Effects", percentage: "50%" },
        ]
    },
    {
        title: "Templates",
        icon: toolsIcon,
        skills: [
            { skill: "Flyers Making", percentage: "100%" },
            { skill: "Youtube Thumbnails", percentage: "90%" },
            { skill: "Figma", percentage: "50%" },
            { skill: "Canva", percentage: "80%" }
        ]
    },
    {
        title: "Soft Skills",
        icon: softSkillsIcon,
        skills: [
            { skill: "Problem-solving", percentage: "80%" },
            { skill: "Collaboration", percentage: "85%" },
            { skill: "Attention to Detail", percentage: "75%" }
        ]
    }
];


export const WORK_EXPERIENCE = [
    {
      title: "BidBay (An Online Auction React Web Application)",
      date: "July -2024",
      responsibilities: [
        "Bidbay is online bidding application where users can make bids and join in other bids",
        "online auction React web application is responsible for providing secure user authentication",
        "managing auctions and bids, offering a user-friendly cart and chat functionality",
        "ensuring smooth navigation and responsive design. It also focuses on protecting user data and handling errors effectively to enhance the overall user experience..",
       
      ]
    },
    {
      title: "YouFind (Fluuter Mobile Application)",
      date: "Sep -2023",
      responsibilities: [
        "YouFind is an Android application offering a range of services",
        " including health management, food recipe creation, chatting, e-commerce, and educational resources",
        " It ensures secure user interactions, seamless navigation, and real-time communication",
        " focusing on delivering a comprehensive and user-friendly experience across multiple service domains."
      ]
    },
    {
      title: "React Portfolio Website",
      date: "Aug -2024",
      responsibilities: [
        "My portfolio React website is designed to showcase my projects, skills, and professional journey",
        " It features a clean, user-friendly interface with responsive design, ensuring visitors have a seamless experience across all devices",
        " I've focused on creating easy navigation, secure contact forms, and efficient loading times to make the site both engaging and accessible."
      ]
    }
  ];
  