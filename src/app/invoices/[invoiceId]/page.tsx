import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { Invoices } from "@/db/schema" 
import { Badge } from "@/components/ui/badge"
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';


export default async function InvoicePage({ params }: {params: {invoiceId: string;}}) {
 const invoiceId =parseInt(params.invoiceId);

 if ( isNaN(invoiceId)){
  throw new Error('Invalid Invoice ID')
 }
  

 const [result] = await db.select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);

    if (!result){
      throw new Error('Invalid Invoice ID')
      
    }
    
  return (
    <main className="max-w-5xl mx-auto h-full my-16 ">
      <Button asChild className='left-4 text-left'>
        <Link href="/dashboard">Go back</Link>
      </Button>
    <div className="flex justify-between mb-8">      
        <h1 className="flex items-center gap-4 text-3xl font-bold">Invoice #{invoiceId}
          <Badge className={cn(
            "rounded-full font-bold text-sm py-1",
            result.status === 'open' && 'bg-blue-500',
            result.status === 'paid' && 'bg-green-700',
            result.status === 'untraced' && 'bg-red-700'
          )}>
                  { result.status }
          </Badge>
        </h1>
        
    </div>
      <p className="text-3xl mb-3">
          ${ (result.value / 100).toFixed(2) }
      </p>
      <p className="text-3xl mb-8">
          { result.description }
      </p>
      <h2 className="font-bold text-xl mb-4">
            Billing Details
      </h2>
      <ul className="grid gap-2">

        <li className="flex gap-4">
          <strong className='block w-28 flex-shrink-0 font-medium text-md'>InVoice ID</strong>
          <span>{invoiceId}</span>
        </li>

        <li className="flex gap-4">
          <strong className='block w-28 flex-shrink-0 font-medium text-md'>InVoice date</strong>
          <span>
          {new Date(result.createTs).toLocaleDateString()}
          </span>
        </li>

        <li className="flex gap-4">
          <strong className='block w-28 flex-shrink-0 font-medium text-md'>Billing Name</strong>
          <span></span>
        </li>

        <li className="flex gap-4">
          <strong className='block w-28 flex-shrink-0 font-medium text-md'>Billing Email</strong>
          <span></span>
        </li>

      </ul>

  </main>

  )
}
