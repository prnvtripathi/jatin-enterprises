import { Inter } from "next/font/google"
import ContactForm from "./ContactForm"
import Link from "next/link"
import { IoCall } from "react-icons/io5"

const inter = Inter({
    subsets: ['latin-ext'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})


export default function Footer() {
    return (
        <footer className="bg-secondary-300">
            <div className="w-11/12 mx-auto py-4">
                <h2 className={`text-3xl md:text-5xl text-left text-primary-300 font-black mb-4 ${inter.className}`}>Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <ContactForm />
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.1179065284327!2d75.77307914355342!3d26.8960102197942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db468646a83ff%3A0xe683974c0a3edcd0!2s125%2C%20Ramnagar%20Main%20Rd%2C%20Kalyanpuri%20Colony%2C%20Ramnagar%2C%20Jaipur%2C%20Rajasthan%20302019!5e0!3m2!1sen!2sin!4v1718787411977!5m2!1sen!2sin" width="100%" height="235" className="border-0 rounded-md shadow-md" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <div className="flex flex-row items-center gap-5 mt-4">
                            <div className="bg-primary-100 w-fit p-2.5 rounded-lg mx-auto">
                                <Link href="tel:+919783981525">
                                    <IoCall />
                                </Link>
                            </div>
                            <div className="bg-primary-100 w-fit p-2.5 rounded-lg mx-auto">
                                <Link href="tel:+919783981525">
                                    <IoCall />
                                </Link>
                            </div>
                            <div className="bg-primary-100 w-fit p-2.5 rounded-lg mx-auto">
                                <Link href="tel:+919783981525">
                                    <IoCall />
                                </Link>
                            </div>
                            <div className="bg-primary-100 w-fit p-2.5 rounded-lg mx-auto">
                                <Link href="tel:+919783981525">
                                    <IoCall />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className={`text-lg text-center text-primary-300 mb-4 mt-8 ${inter.className}`}>
                    &copy; {new Date().getFullYear()} Jatin Enterprises. All rights reserved.
                </h2>
            </div>
        </footer>
    )
}