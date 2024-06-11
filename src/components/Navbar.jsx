import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Dancing_Script } from "next/font/google"


const ds = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700", "500", "600"],
})

const navItems = [
    { name: "Home", href: "#" },
    { name: "Categories", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
]

export default function Component() {
    return (
        <div className="flex items-center justify-between px-4 py-5 w-11/12 mx-auto">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <span className={`text-3xl font-bold tracking-wide ${ds.className}`}>Jatin Enterprises</span>
            </Link>
            <div className="hidden md:flex justify-around items-center gap-8 lg:gap-12">
                {navItems.map((item, index) => (
                    <Link key={index} href={item.href} className="text-xl font-medium hover:bg-secondary-200 px-1.5 py-1 transition-all rounded-md" prefetch={false}>
                        {item.name}
                    </Link>
                ))}
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="grid w-[200px] p-4">
                        {navItems.map((item, index) => (
                            <Link key={index} href={item.href} className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}
