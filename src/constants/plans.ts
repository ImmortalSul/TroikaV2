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
        desc: "Lead Creative & Marketing at Troika Hub, driving 3D design, VFX, and brand impact.",
        badge: "Co-Founder",
        buttonText: "Contact",
        features: [
            "Lead Creative & SM Manager",
            "1.5+ Years of Experience",
            "3D Stack: Blender, Autodesk Maya",
            "Editing Stack: Illustrator, After Effects, Photoshop",
            "Models Built: McLaren 720S, Star Wars TIE Fighter, Space Marine",
            "Renders: Iphone Mock Adverts, 3D Logo Animations for Brands",
        ],
        link: "https://stripe.com/free-plan-link"
    },
    {
        id: "Immprtal",
        title: "S Sulaiman",
        desc: "Lead Developer & Designer. A proficient Full-Stack and Web3 Developer",//yeah this is be lmao i am going to kill myself
        badge: "Founder",
        buttonText: "Upgrade to Pro",
        features: [
            "Lead Developer & Creator",
            "4+ Years of Experience",
            "Priority email support",
            "10 project limit",
            "Enhanced analytics & insights",
            "Pro model image generation",
            "Team collaboration tools",
            "Custom branding options"
        ],
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "Tailored solutions for large organizations and agencies",
        badge: "Contact Sales",
        buttonText: "Upgrade to Enterprise",
        features: [
            "Unlimited AI content generation",
            "All social media integrations",
            "Dedicated account manager",
            "Unlimited projects",
            "Custom analytics & reporting",
            "Enterprise-grade security",
            "Free updates",
            // "24/7 priority support"
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];