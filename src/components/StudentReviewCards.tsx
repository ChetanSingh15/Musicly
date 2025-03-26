"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

const musicAcademyTestimonials = [
    {
        quote: 
            "This academy didn't just improve my voice - it gave me the tools and confidence to pursue music professionally. Within a year of training, I booked my first paid singing gig!",
        name: "Chris Hulkenberg",
        title: "Aspiring Playback Singer",
    },
    {
        quote: 
            "I came in barely able to strum chords. Today, I'm performing at local cafes thanks to my teacher's patient guidance and the academy's performance-focused approach.",
        name: "Arian Keinster",
        title: "Guitar Student",
    },
    {
        quote: 
            "The piano instructors have an incredible way of breaking down complex pieces. After struggling with Chopin for years, I finally performed my first nocturne flawlessly!",
        name: "William Stonis",
        title: "Classical Pianist",
    },
    {
        quote: 
            "The vocal coaching here goes beyond scales - they teach you how to think like an artist. My audition tape got me accepted at three prestigious music programs!",
        name: "Han Lue",
        title: "Music Student",
    },
    {
        quote: 
            "As a songwriter, I learned how to transform ideas into complete compositions. The faculty's industry insights helped me develop my unique sound.",
        name: "Max Amini",
        title: "Songwriter",
    },
    {
        quote: 
            "From messing up basic beats to headlining college festivals - the drum instructors' rhythmic exercises and performance tips made all the difference.",
        name: "George Oswell",
        title: "Band Performer",
    },
    {
        quote: 
            "The violin program's focus on precision and expression took my playing to new heights. I recently earned first chair in my youth orchestra!",
        name: "Jack Stein",
        title: "Orchestral Violinist",
    },
    {
        quote: 
            "Stage fright used to cripple me. Through the academy's performance workshops and supportive environment, I now love being in the spotlight!",
        name: "Vick Rollin",
        title: "Vocalist & Performer",
    },
    {
        quote: 
            "The jazz course opened my ears to new possibilities. Learning to improvise fluidly has made music feel like an exciting conversation rather than rigid notes.",
        name: "Jasmin Bhasin",
        title: "Jazz Enthusiast",
    },
    {
        quote: 
            "Starting with just a laptop and dreams, the production course gave me professional-grade skills. My first single just hit 10K streams!",
        name: "Jhon Doe",
        title: "Music Producer",
    },
    {
        quote: 
            "We've made music a family affair! Watching my daughter grow as a pianist while I learn guitar has been our most rewarding bonding experience.",
        name: "Sam Curren",
        title: "Parent & Student",
    },
]

function MusicalAcademyTestimonials() {
  return (
    <div className="h-[22rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex  flex-col items-center justify-center overflow-hidden" >
        <div  className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}>
            <h2 className="text-3xl font-bold text-center mt-8 mb-8 z-10">Hear Our Harmony: Voice of Success</h2>
            <div>
                <div>
                    <InfiniteMovingCards
                    items={musicAcademyTestimonials}
                    direction="right"
                    speed="slow"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MusicalAcademyTestimonials