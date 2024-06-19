export default function ContactForm() {
    return (
        <section className="max-w-4xl p-6 mx-auto bg-secondary-100 rounded-md shadow-md">
            <form>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700" htmlFor="name">Name</label>
                        <input id="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                    </div>

                    <div>
                        <label className="text-gray-700" htmlFor="emailAddress">Email Address</label>
                        <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                    </div>

                    <div>
                        <label className="text-gray-700" htmlFor="contactNumber">Contact Number</label>
                        <input id="contactNumber" type="text" size="10" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md" />
                    </div>
                    
                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2 leading-5 text-white transition-colors duration-300 bg-secondary-300 rounded-xl">Save</button>
                    </div>
                </div>

            </form>
        </section>
    )
}