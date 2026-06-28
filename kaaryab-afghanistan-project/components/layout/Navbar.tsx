import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="bg-blue-700 text-white">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                
                <Link href="" className="text-2xl font-bold">KaarYab</Link>

            <div className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/opportunities">Opportunities</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>

            </div>
        </nav>
    )
}