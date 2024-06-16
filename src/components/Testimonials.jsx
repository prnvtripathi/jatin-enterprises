import { Inter } from "next/font/google";
import Tooltip from "./Tooltip";
import Stats from "./Stats";

const inter = Inter({
    subsets: ['latin-ext'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Testimonials() {
    return (
        <section className="w-11/12 mx-auto">
            <div className="flex flex-col justify-center gap-y-4">
                <h2 className={`text-3xl md:text-5xl text-center text-secondary-300 font-black mb-4 ${inter.className}`}>Our Testimonials</h2>
                <Tooltip />
            </div>
            <div className="flex flex-col gap-y-4">
                <Stats />
                <p className="text-center italic text-secondary-200 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>
        </section>
    )
}