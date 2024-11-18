
import Container from '@/components/Container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mt-6 mb-6'>
      <Container>

      <div className='flex justify-between items-center gap-4'>      
            <p className='font-normal text-sm'>
              <Link href="/dashboard">
                Invoicey
              </Link>
            </p>
            <p className='font-normal text-sm'>
                @copy; {new Date().getFullYear()}
            </p>
            <p className='font-normal text-sm hover:underline'>
              Created by &nbsp;
              <Link href="https://www.linkedin.com/in/siddharthbadal/"
                target='_blank'
              >
                 Sidd
              </Link>
            </p>
            
      </div>
      </Container>
    </footer>
  )
}
