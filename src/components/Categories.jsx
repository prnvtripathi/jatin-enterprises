import { Dancing_Script } from "next/font/google"

const ds = Dancing_Script({
    subsets: ['latin-ext'],
    weight: ['400', '700', '500', '600']
})

const categories = [
    {
        name: 'Deal Zone',
        image: '/icons/1.png'
    },
    {
        name: 'Store',
        image: '/icons/2.png'
    },
    {
        name: 'Commercial Furniture',
        image: '/icons/3.png'
    },
    {
        name: 'Office Furniture',
        image: '/icons/4.png'
    },
    {
        name: 'Interior Furniture',
        image: '/icons/5.png'
    },
    {
        name: 'School & College Furniture',
        image: '/icons/6.png'
    },
    {
        name: 'Home Furniture',
        image: '/icons/7.png'
    },
    {
        name: 'Custom Furniture',
        image: '/icons/8.png'
    },
    {
        name: 'Comercial Tenders',
        image: '/icons/9.png'
    }
]

export default function Categories() {
    return (
        <section className="w-full bg-primary-100 py-2 md:py-12" id="categories">
            <h2 className={`text-3xl md:text-5xl text-center text-secondary-300 font-bold mb-4 ${ds.className}`}>Some top of the line categories</h2>
            <div className="flex items-center justify-center flex-wrap gap-x-14 gap-y-8 max-w-4xl mx-auto mt-12">
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <img src={category.image} alt={category.name} className="w-16 h-16" />
                        <p className="text-sm text-secondary-300 italic">{category.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}