import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { redirect } from "next/navigation"
import { auth } from "@/auth"

const Dashboard = async () => {
    // To protect the dashboard page after successful login
    const session = await auth();
    const user = session?.user;
    if (user) redirect("/");

    return (
        <div className="flex min-h-screen">
            <div className="flex-1 bg-gray-100 dark:bg-gray-950">
                <div className="p-6 grid gap-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <div className="text-2xl font-bold">$45,231.87</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400"  >+20.1% from last month</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">

                                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>

                            </CardHeader>

                            <CardContent >
                                <div className="text-2xl font-bold">+2350</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400"  >+180.1% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">

                                <CardTitle className="text-sm font-medium">Sales</CardTitle>

                            </CardHeader>

                            <CardContent >
                                <div className="text-2xl font-bold">+12,234</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400"  >+19% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">

                                <CardTitle className="text-sm font-medium">Active Now</CardTitle>

                            </CardHeader>

                            <CardContent >
                                <div className="text-2xl font-bold">+573</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400"  >+201% from last month</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">

                                <CardTitle className="text-sm font-medium">
                                    Recent Signups
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <Table>

                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Plan</TableHead>
                                            <TableHead>Date</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Toluwani Ogunde</TableCell>
                                            <TableCell>toluwani@oja.com</TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>04/27/2025</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Tofunmi Ogunde</TableCell>
                                            <TableCell>tofunmi@skoolhq.com</TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>04/12/2025</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Ajibola Oreoluwa</TableCell>
                                            <TableCell>ore@karma.com</TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>01/05/2025</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Ife Ajibola</TableCell>
                                            <TableCell>ife@game.com</TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>30/01/2024</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Akorede Oguntolu</TableCell>
                                            <TableCell>maverick@ashawo.com</TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>04/27/2023</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Rhoda Dada</TableCell>
                                            <TableCell>rhoda@short.com</TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>05/06/2025</TableCell>
                                        </TableRow>

                                    </TableBody>

                                </Table>

                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard