import Link from "next/link"
// import { Button } from "../ui/button"
// import { signOut, auth } from "@/auth"

const Navbar = async () => {

    return (
        <nav className="flex justify-around items-center py-4 bg-[#141414] text-white">
            <Link href="/" className="text-xl font-bold">SecureTrade</Link>
            <ul className="hidden md:flex space-x-4 list-none">
                {/* {user ? (
                    <>
                        <li>
                            <Link href="/login" className="hover:text-gray-400">Login</Link>
                        </li>
                        <li>
                            <Link href="/register" className="hover:text-gray-400">Register</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="mt-[9px]">
                            <Link href="/private/dashboard" className="hover:text-gray-400">Dashboard</Link>
                        </li>
                        <li className="mt-[2px]">
                            <form action={
                                async () => {
                                    'use server'
                                    await signOut()
                                }
                            }>
                                <Button type="submit" variant={"ghost"}>
                                    Logout
                                </Button>
                            </form>
                        </li>
                    </>
                )} */}

                <>
                        <li>
                            <Link href="/login" className="hover:text-gray-400">Login</Link>
                        </li>
                        <li>
                            <Link href="/register" className="hover:text-gray-400">Register</Link>
                        </li>
                    </>
            </ul>
        </nav>
    )
}
export default Navbar