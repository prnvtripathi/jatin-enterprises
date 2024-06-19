"use client"

import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
    subsets: ['latin-ext'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Why() {
    return (
        <section className="md:py-24">
            <div className="flex flex-col md:flex-row-reverse items-center">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, type: 'linear', stiffness: 100 }}
                    viewport={{ once: true }}
                    className="bg-secondary-200 max-w-3xl h-fit py-12 px-4 md:px-14 text-primary-100">
                    <h2 className={`text-3xl md:text-5xl font-black mb-4 ${inter.className}`}>Why Us</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, type: 'linear', stiffness: 100 }}
                    viewport={{ once: true }}
                >
                    <Image src="/images/why.jpg" alt="Why Us" width={500} height={500} className="aspect-square object-cover md:saturate-50 hover:saturate-100 hover:-translate-y-2 transition-all duration-300 shadow-xl" />
                </motion.div>
            </div>

        </section>
    )
}