"use client";
import HeroSlideShow from "@/components/common/HeroSlideshow";
import Head from "next/head";
import ProfileSection from "../sections/profile-section";
import ProjectList from "../sections/project-list";
import TestimonialsSection from "../sections/testimonials-section";

export default function Homepage() {
    return (
        <>
            <Head>
                <title>Skratch® Development Studio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative bg-dark">
                <HeroSlideShow />
                <ProjectList />
                <ProfileSection/>
                <TestimonialsSection/>
            </div>
        </>
    );
}
