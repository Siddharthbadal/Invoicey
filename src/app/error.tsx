"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function error( { error} :{error : Error}) {
  return (
    <div className="text-3xl text-center mx-auto my-auto mt-16">
           <h1 >
           Error: { error.message }
           </h1>

           <Button asChild className='left-4 text-left'>
                    <Link href="/dashboard">Go back</Link>
            </Button>
    </div>
  )
}
