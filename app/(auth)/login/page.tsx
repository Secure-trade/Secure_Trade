import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"


import { signIn } from "@/auth";
// import { redirect } from "next/navigation"






const Login = async () => {


    return (
        <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212 dark:bg:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 flex justify-center dark:text-neutral-200">Welcome Back</h2>

            <p className="text-neutral-600 text-sm max-w-sm mt-2 flex justify-center dark:text-neutral-300">SecureTrade, your secure platform</p>

            <form action="" className="my-8 ">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <div className="flex flex-col">
                        <Label htmlFor="email" className="mb-2">Email Address</Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Enter your email address"
                            name="email"
                            className="mb-4" />
                    </div>
                    <div className="flex flex-col">

                        <Label htmlFor="password" className="mb-2">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="********"
                            name="password"
                            className="mb-4" />
                    </div>
                </div>

                <Button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zince-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                    Sign in &rarr;
                </Button>

                <p className="text-neutral text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Don&apos;t have an account? <Link href="/register" className="text-blue-800" >Sign up</Link>
                </p>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>


            <section className="flex flex-col space-y-4">

                <form action={async () => {
                    'use server'
                    await signIn("github")
                }}>
                    <Button
                        type="submit"
                        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_var(--neutral-800)]">

                        {/* <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" /> */}

                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Github
                        </span>

                    </Button>
                </form>

                <form action={async () => {
                    'use server'
                    await signIn("google")
                }}>
                    <Button
                        type="submit"
                        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_var(--neutral-800)]">

                        {/* <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" /> */}
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Google
                        </span>

                    </Button>
                </form>

            </section>


        </div>
    )
}
export default Login