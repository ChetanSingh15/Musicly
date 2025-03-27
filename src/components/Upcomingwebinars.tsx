"use client";

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function Upcomingwebinars() {

    const featuredWebiars = [
        {
            title: "Mastering Vocal Techniques",
            description: "Learn advanced vocal control, stage presence, and mic techniques from industry professionals to captivate any audience.",
            slug: "mastering-vocal-techniques",
            isFeatured: true,
        },
        {
            title: "Guitar Mastery: From Chords to Solos",
            description: "Elevate your guitar skills with structured lessons on scales, improvisation, and performance-ready soloing techniques.",
            slug: "guitar-mastery-chords-to-solos",
            isFeatured: true,
        },
        {
            title: "Piano for Producers",
            description: "Blend classical piano skills with modern production techniques to create chart-worthy melodies and harmonies.",
            slug: "piano-for-producers",
            isFeatured: true,
        },
        {
            title: "Beat Making & Rhythm Fundamentals",
            description: "Unlock the secrets of drum programming, groove creation, and rhythm patterns for any genre.",
            slug: "beat-making-fundamentals",
            isFeatured: true,
        },
        {
            title: "Songwriting Lab: Lyrics & Melody",
            description: "Transform ideas into hit songs with structured frameworks for lyric writing and melodic hooks.",
            slug: "songwriting-lab",
            isFeatured: true,
        },
        {
            title: "Jazz Improvisation Demystified",
            description: "Break free from sheet music! Learn to improvise fluently over jazz standards and blues progressions.",
            slug: "jazz-improvisation",
            isFeatured: true,
        },
    ]


  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
            </div>

            <div className="mt-10">
                <HoverEffect 
                items={featuredWebiars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: `/${webinar.slug}`,
                    }
                ))}
                />
            </div>

            <div className="mt-10 text-center">
                <Link href={"/"}
                className="px-4 py-2 rounded border  border-neutral-600 text-neutral-700 bg-white hover:bg-gray-200 transition duration-200" 
                >
                View All Webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Upcomingwebinars