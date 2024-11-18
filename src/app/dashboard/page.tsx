import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { db } from '@/db'
import { eq } from "drizzle-orm"
import { Invoices } from "@/db/schema" 
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Container from '@/components/Container'
import { CirclePlus } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { auth } from "@clerk/nextjs/server"


export default async function Dashboard() {
  const { userId } = await auth()

  if ( !userId ) return;

  const results = await db.select()
  .from(Invoices)
  .where(eq(Invoices.userId, userId))

  return (
    <main className=" h-full ">
    <Container>

    <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
            <Button variant="ghost" className="inline-flex gap-2" asChild>
                <Link href="/invoices/new">
                    <CirclePlus  className="h-4 w-4"/>
                    <span>Create Invoice</span>
                </Link>
            </Button>
        </p>
    </div>
    

<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px] p-4 font-semibold text-md">
            Date
    </TableHead>
      <TableHead className="p-4 font-semibold text-md">
            Customer
        </TableHead>
      <TableHead className="p-4 font-semibold text-md">
        Email
        </TableHead>
      <TableHead className="text-center p-4 font-semibold text-md">
            Status
        </TableHead>
      <TableHead className="text-right p-4 font-semibold text-md">
            Value
        </TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    {results.map(result => {
      return (
              <TableRow key={result.id}>
                <TableCell className="text-left text-[16px] p-0">
                  <Link href={`invoices/${result.id}`} className="font-semibold block p-4">{new Date(result.createTs).toLocaleDateString()}</Link>
                  </TableCell>
                <TableCell className="text-left text-[16px] p-0">
                  <Link href={`invoices/${result.id}`} className="font-semibold block p-4">Jhon Cena</Link>
                </TableCell>
                <TableCell className="text-left text-[16px] p-0">
                  <Link href={`invoices/${result.id}`} className="block p-4"> 
                          jhonecena@email.com
                  </Link>
                </TableCell>
                <TableCell className="text-center text-[16px] p-0 ">
                  <Link href={`invoices/${result.id}`} className="block p-4">
                  <Badge className={cn(
                          "rounded-full font-bold text-sm py-1",
                          result.status === 'open' && 'bg-blue-500',
                          result.status === 'paid' && 'bg-green-700',
                          result.status === 'untraced' && 'bg-red-700'
                        )}>
                        { result.status }
                  </Badge>
                  </Link>
                </TableCell>
                <TableCell className="text-right text-[16px] p-0">
                  <Link href={`invoices/${result.id}`} className="font-semibold block p-4">{(result.value / 100).toFixed(2)}</Link>
                </TableCell>
              </TableRow>
      )
    })}
  </TableBody>
</Table>

</Container>
  </main>

  )
}
