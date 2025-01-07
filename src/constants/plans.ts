type PLAN = {
    id: string;
    title: string;
    desc: string;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "Caisard",
        title: "Chaitayna Sardana",
        desc: "Lead Creative & Marketing, Driving 3D design, VFX, and brand impact.",
        badge: "Co-Founder",
        buttonText: "Contact",
        features: [
            "Head of Creative & SM Manager",
            "1.5+ Years of Experience",
            "3D Stack: Blender, Autodesk Maya",
            "Editing Stack: Illustrator, After Effects, Photoshop",
            "Models Built: McLaren 720S, Star Wars TIE Fighter, Space Marine",
            "Renders: Iphone Mock Adverts, 3D Logo Animations for Brands",
            "IIDE Digital Marketing Intern",
        ],
        link: "https://www.linkedin.com/in/chaitanyasardana/"
    },
    {
        id: "Immortal",
        title: "S Sulaiman",
        desc: "Lead Developer & Designer. A proficient Full-Stack and Web3 Developer",//yeah this is be lmao i am going to kill myself
        badge: "Founder",
        buttonText: "Contact",
        features: [
            "Lead Developer & Creator",
            "4+ Years of Experience",
            "Tech Stack: TS JS Nextjs ThreeJs AWS Azure Rust Solana Go +More",
            "Products Built: Optix, Scrapix, Troika-AI and more",
            "Interned at Deloitte and Capgemini",
            "Worked at 3 Early stage government funded startups.",
            "Lead Designer for a Formula Bharat Racing Team",
            
        ],
        link: "/"
    },
    {
        id: "Scienceboi",
        title: "Pratyush Bose",
        desc: "CTO & Founding Engineer. Full-Stack Developer, talent scout & product expert.",
        badge: "Co-Founder",
        buttonText: "Contact",
        features: [
            "CTO & Project Director",
            "2 Years of Experience",
            "Tech Stack: Java SQL NextJs Tailwind TS PrismaDb AWS",
            "Projects Built: Prisma-Gen, Modifio, AI Resume Builder",
            "Products Built: RepoSnap and many more in progress ",
            "Project Intern ETHNUS and Codemithra",
            "Specializes in cloud infrastructure and databse management",
            // "24/7 priority support"
        ],
        link: "https://www.linkedin.com/in/pratyush-bose/"
    }
];