import Link from "next/link";
import { Button } from "@/components/ui/button"
import Container from '@/components/Container'

export default function Home() {
  return (

    <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto">
      <Container>

              <h1 className="text-5xl font-bold">Invoicey</h1>
              <div>                      
                    <p className="mt-2">
                      <Button asChild>
                        <Link href="/dashboard">
                          <span className="font-bold">Dashboard</span>
                        </Link>
                      </Button>
                    </p>
              </div>
      </Container>
  </main>
      
  );
}
