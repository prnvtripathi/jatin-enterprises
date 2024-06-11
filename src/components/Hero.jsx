import { Montserrat, Dancing_Script } from "next/font/google"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

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
        <div className="h-screen bg-secondary-300">
            <div className="flex items-center justify-between px-12 w-full">
                <div className="w-full">
                    <div className={`${montserrat.className}`}>
                        <h1 className="text-5xl font-bold text-white">
                            Furniture that Everyone{" "}
                            <span className={`text-primary-200 font-bold text-6xl ${ds.className}`}>
                                Loves 💖
                            </span>
                        </h1>
                        <p className="text-white max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <div className="mt-4 flex flex-row justify-start items-center gap-3">
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
                    </div>
                </div>
                <Image src="/hero/2.svg" alt="Hero Image" width={500} height={500} className="w-1/2 object-cover" />
            </div>
        </div>
    )
}