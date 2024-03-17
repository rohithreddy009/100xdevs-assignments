import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-center space-x-4 py-4">
            <Link href='/' className="border-2 border-gray-200 p-2 rounded-lg bg-white hover:bg-gray-100 text-blue-500 hover:text-blue-700 inline-block">
                Home
            </Link>
            <Link href='/staticroute' className="border-2 border-gray-200 p-2 rounded-lg bg-white hover:bg-gray-100 text-blue-500 hover:text-blue-700 inline-block">
                Static Route
            </Link>
            <Link href='/interactiveroute' className="border-2 border-gray-200 p-2 rounded-lg bg-white hover:bg-gray-100 text-blue-500 hover:text-blue-700 inline-block">
                Interactive Route
            </Link>
        </nav>
    );
}
