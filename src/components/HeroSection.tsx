import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-10"
    >
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="blue"
        />
        <div className="p-4 relative z-10 w-full text-center">
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >The Art & Soul of Music</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Fuel your passion for music with our dynamic courses—where every note brings you closer to mastery! Perfect for beginners or seasoned players, this is your stage to shine. Ready to unleash your sound? Join us today! 
            </p>
            <div className="mt-4">
                <Link href={"/courses"}> 
                    <Button 
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >Explore Courses</Button>
                 </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection