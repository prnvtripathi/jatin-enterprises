"use client"

import { Montserrat, Dancing_Script } from "next/font/google"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import WordPullUp from "./magicui/word-pull-up"
import { motion } from "framer-motion"

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const ds = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700", "500", "600"],
})

export default function Hero() {
    return (
        <div className="h-screen bg-gradient-to-tr from-secondary-300 to-secondary-100">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 py-12 w-full">
                <div className="w-full">
                    <div className={`${montserrat.className} text-center md:text-left`}>
                        <WordPullUp
                            className='text-4xl font-bold tracking-widest text-primary-200 text-left md:text-7xl md:leading-[5rem]'
                            words="Furniture that matters to you!"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="text-white max-w-xl mt-2"
                        >
                            Reach out to us and let's redefine your space with our expert hands .
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3 }}
                        className="mt-4 flex flex-row justify-center md:justify-start items-center gap-3">
                        <Button asChild className="bg-primary-300 hover:bg-primary-100 text-black w-48">
                            <Link href="#">
                                Buy Now!
                            </Link>
                        </Button>
                        <Button asChild className="border border-primary-200 bg-transparent hover:bg-primary-300 text-black w-48">
                            <Link href="#">
                                Explore
                            </Link>
                        </Button>
                    </motion.div>
                </div>
                <motion.img
                    src="/hero/2.svg"
                    alt="Hero Image"
                    className="md:w-1/2 object-cover"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                />
            </div>
        </div>
    )
}