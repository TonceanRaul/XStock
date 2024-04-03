import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage1,
    benefitImage2,
    benefitImage3,
    benefitImage4,
    benefitImage5,
    benefitImage6,
    bitcoin,
    facebook,
    elrond,
    instagram,
    nft,
    mex,
    twitter,
    linkedin,
    xStock,
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "Features",
        url: "/#features",
    },
    {
        id: "1",
        title: "Collaboration",
        url: "/#collaboration",
    },
    {
        id: "2",
        title: "Roadmap",
        url: "/#roadmap",
    },
    {
        id: "3",
        title: "New account",
        url: "/#signup",
        onlyMobile: true,
    },
    {
        id: "4",
        title: "Connect wallet",
        url: "/#login",
        onlyMobile: true,
    },
];

export const companyLogos = [xStock, xStock, xStock, xStock, xStock];

export const collabContent = [
    {
        id: "0",
        title: "Secure Ownership",
        text: "Decentralized records ownership rights, ensuring authenticity and preventing unauthorized alteration",
    },
    {
        id: "1",
        title: "Smart NFT's Generation",
    },
    {
        id: "2",
        title: "Premium Rewards",
        text: "Fun way to increase your revenue by following your passion.",
    },
];

export const collabApps = [
    {
        id: "0",
        title: "Elrond",
        icon: elrond,
        width: 26,
        height: 36,
        angle: 45,
    },
    {
        id: "1",
        title: "Nft",
        icon: nft,
        width: 34,
        height: 36,
        angle: 3 * 45,
    },
    {
        id: "2",
        title: "Bitcoin",
        icon: bitcoin,
        width: 36,
        height: 28,
        angle: 5 * 45,
    },
    {
        id: "3",
        title: "Mex",
        icon: mex,
        width: 34,
        height: 35,
        angle: 7 * 45,
    },
];

export const experiences = [
    {
        title: "Project Design",
        name: "XStock",
        icon: xStock,
        iconBg: "#383E56",
        date: "Jul 2024 - Dec 2024",
        points: [
            "Research and design tokenomics model including token supply, distribution mechanism, utility within the ecosystem, and token governance.",
            "Engage with legal advisors to ensure compliance with relevant regulations.",
            "Develop and audit smart contracts for the token adhering to best practices and security standards. \
            Conduct thorough testing to ensure functionality and security.",
            "Establish online presence across social media platforms, forums, and community channels.",
            "Engage with potential users and investors to build a supportive community around the project.",
        ],
    },
    {
        title: "Platform Launch",
        name: "XStock",
        icon: xStock,
        iconBg: "#23F7DD",
        date: "Jan 2025 - Jul 2025",
        points: [
            "Prepare and submit necessary documentation and requirements for listing the token on the MultiversX platform.",
            "Work closely with the MultiversX team to facilitate the token listing process.",
            "Help extending the microscope simulator to mimic the real microscope along with it's parameters.",
            "Collaborating with other teams, clients, product managers and developers to create high-quality products.",
        ],
    },
    {
        title: "Marketing and Awareness",
        name: "XStock",
        icon: xStock,
        iconBg: "#383E56",
        date: "Jan 2025 - Jul 2026",
        points: [
            "Launch marketing campaigns to raise awareness about the project and its token",
            "Engage with influencers and media outlets to amplify reach and visibility.",
            "Continue fostering community engagement through regular updates, AMA sessions, and community events.",
            "Gather feedback and incorporate community suggestions into project development.",
        ],
    },
    {
        title: "Ecosystem Expansion",
        name: "XStock",
        icon: xStock,
        iconBg: "#23F7DD",
        date: "Jan 2026 - Indefinitely",
        points: [
            "Pursue listings on reputable centralized and decentralized exchanges to enhance liquidity and accessibility of the token.",
            "Evaluate and prioritize exchange listings based on user demand and strategic considerations.",
            "Explore partnerships and collaborations to expand the project's ecosystem and utility of the token.",
            "Develop use cases and integrations with other projects to drive adoption and value creation.",
            "Implement community governance mechanisms to empower token holders with decision-making authority and governance rights within the ecosystem.",
        ],
    },
];

export const benefits = [
    {
        id: "0",
        title: "Picture anything",
        text: "Users can take pictures and create NFT's.",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage1,
    },
    {
        id: "1",
        title: "Improve everyday",
        text: "Users can take pictures and create NFT's.",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "2",
        title: "Connect everywhere",
        text: "Users can take pictures and create NFT's.",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage3,
    },
    {
        id: "3",
        title: "Fast responding",
        text: "Users can take pictures and create NFT's.",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage4,
        light: true,
    },
    {
        id: "4",
        title: "Ask anything",
        text: "Users can take pictures and create NFT's.",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage5,
    },
    {
        id: "5",
        title: "Improve everyday",
        text: "Users can take pictures and create NFT's.",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage6,
    },
];

export const socialMedia = [
    {
        id: "0",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
        link: "https://www.instagram.com/",
    },
    {
        id: "1",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
        link: "https://www.facebook.com/",
    },
    {
        id: "2",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
        link: "https://www.twitter.com/",
    },
    {
        id: "3",
        title: "Linkedin",
        iconUrl: linkedin,
        url: "#",
        link: "https://www.linkedin.com/",
    },
];

export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            {
                name: "Privacy Policy",
                link: "https://www.xstock.com/privacy-policy/",
                href: "/privacy-policy",
            },
            {
                name: "General Terms and Conditions",
                link: "https://www.xstock.com/terms-of-use/",
                href: "/terms-of-use",
            },
            {
                name: "Terms & Services",
                link: "https://www.xstock.com/terms-and-services/",
                href: "/terms-and-services",
            },
        ],
    },
    {
        title: "Community",
        links: [
            {
                name: "Help Center",
                link: "https://www.xstock.com/help-center/",
                href: "/help-center",
            },
            {
                name: "Suggestions",
                link: "https://www.xstock.com/suggestions/",
                href: "/suggestions",
            },
            {
                name: "Blog",
                link: "https://www.xstock.com/blog/",
                href: "/blog",
            },
            {
                name: "Newsletters",
                link: "https://www.xstock.com/newsletters/",
                href: "/newsletters",
            },
        ],
    },
    {
        title: "Partner",
        links: [
            {
                name: "Our Partner",
                link: "https://www.xstock.com/our-partner/",
                href: "/our-partner",
            },
            {
                name: "Become a Partner",
                link: "https://www.xstock.com/become-a-partner/",
                href: "/become-a-partner",
            },
        ],
    },
];
