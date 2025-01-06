import React from 'react';
import Navbar from '@/components/marketing/navbar';
import Footer from '@/components/marketing/footer';
import Container from '@/components/global/container';
import { Wrapper } from '@/components';

const DocsPage = () => {
    return (
        <>
            <Navbar />
            <Wrapper>
            <div className="flex flex-col items-center justify-center py-20">
            <Container delay={0.1} className="w-full">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full mt-48">
                        Documentation
                    </h1>
                    <p className="text-sm mb-2 italic mt-20">
                        Last updated: 05th January 2025
                    </p>
                    <p className="mt-4">
                        Welcome to the <strong>Troika Hub</strong> documentation. Here you will find all the information you need to get started and make the most out of our platform.
                    </p>

                    <h2 className="text-xl font-medium mt-8">
                        Getting Started
                    </h2>
                    <p className="mt-8 text-muted-foreground">
                        To get started with Troika Hub, follow these steps:
                    </p>
                    <ul className="list-disc ml-8 text-muted-foreground mt-4">
                        <li>Sign up for an account.</li>
                        <li>Verify your email address.</li>
                        <li>Log in to your dashboard.</li>
                        <li>Explore the features and settings.</li>
                    </ul>

                    <h2 className="text-xl font-medium mt-12">
                        Features
                    </h2>
                    <p className="mt-8 text-muted-foreground">
                        Troika Hub offers a variety of features to help you manage your social media presence:
                    </p>
                    <ul className="list-disc ml-8 text-muted-foreground mt-4">
                        <li>Scrapix: Intuitive tool for scraping and organizing web data effortlessly.</li>
                        <li>Optix: Automate workflows visually with drag-and-drop ease and advanced integrations.</li>
                        <li>RepoSnap: Intuitive tool for scraping and organizing web data effortlessly.</li>
                        <li>Vertex: Stunning 3D portfolios to showcase creativity and skills interactively.</li>
                    </ul>

                    <h2 className="text-xl font-medium mt-12">
                        FAQs
                    </h2>
                    <h3 className="text-lg mt-8">
                        How do I reset my password?
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                        To reset your password, go to the login page and click on Forgot Password. Follow the instructions to reset your password.
                    </p>

                    <h3 className="text-lg mt-8">
                        How do I contact support?
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                        You can contact our support team by emailing support@troikahub.tech. We are here to help you with any issues or questions you may have.
                    </p>

                    <h2 className="text-xl font-medium mt-12">
                        Terms of Service
                    </h2>
                    <p className="mt-8 text-muted-foreground">
                        By using Troika Hub, you agree to our terms of service. Please read them carefully to understand your rights and obligations.
                    </p>

                    <h2 className="text-xl font-medium mt-12">
                        Privacy Policy
                    </h2>
                    <p className="mt-8 text-muted-foreground">
                        Your privacy is important to us. Please review our privacy policy to understand how we collect, use, and protect your information.
                    </p>

                    <h2 className="text-xl font-medium mt-12">
                        Contact Us
                    </h2>
                    <p className="mt-8 text-muted-foreground">
                        If you have any questions or need further assistance, please contact us at support@troikahub.tech.
                    </p>
                </Container>
                
            </div>
            </Wrapper>
            <Footer />
        </>
    );
};

export default DocsPage;