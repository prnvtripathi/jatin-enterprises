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
        <div className="h-screen bg-secondary-200">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 py-12 w-full">
                <div className="w-full">
                    <div className={`${montserrat.className} text-center md:text-left`}>
                        <WordPullUp
                            className='text-4xl font-bold tracking-[-0.02em] text-primary-200 text-left md:text-7xl md:leading-[5rem]'
                            words="Furniture that everyone loves!"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="text-white max-w-xl"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3 }}
                        className="mt-4 flex flex-row justify-center md:justify-start items-center gap-3">
                        <Button asChild>
                            <Link href="#">
                                Buy Now!
                            </Link>
                        </Button>
                        <Button asChild>
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