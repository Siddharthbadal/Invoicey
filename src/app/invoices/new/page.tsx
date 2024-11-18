"use client";

import { SyntheticEvent, useState, startTransition } from "react";
import Form from 'next/form';
import { sql } from "drizzle-orm";
import { db } from "@/db";

import { Label } from "@radix-ui/react-Label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createAction } from "@/app/actions/formactions";
import SubmitButton from "@/components/SubmitButton";
import Container from '@/components/Container'


export default  function AddInvoice() {
  const [state, setState] = useState('ready');

   async function handleOnSubmit(event: SyntheticEvent){
      
      if ( state === 'pending'){
        event.preventDefault();
        return;
      } 
        setState('pending');              
    }


return (
  <main className="h-full gap-6">
    <Container>

  <div className="flex justify-between">
      <h1 className="text-3xl font-bold mb-6">Add Invoice</h1>
      
  </div>
       
    <Form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 max-w-md">
      <div>
        <Label htmlFor="billing-name" className="block mb-2 font-semibold text-md">Billing Name</Label>
        <Input name="billing-name" id="billing-name" type="text" autoComplete="off" />
        </div>
      <div>
        <Label htmlFor="billing-email" className="block mb-2 font-semibold text-md">Billing Email</Label>
        <Input name="billing-email" id="billing-email" type="text" autoComplete="off" />
      </div>
      <div>
        <Label htmlFor="value" className="block mb-2 font-semibold text-md">Value</Label>
        <Input name="value" id="value" type="text" autoComplete="off" />
      </div>
      <div>
        <Label htmlFor="description" className="block mb-2 font-semibold text-md">Description</Label>
        <Textarea name="description" id="description" rows={5} />
      </div>
      <div>
        

        <SubmitButton />

      </div>
    </Form>
    </Container>


  
</main>

)
}
