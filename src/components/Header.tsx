import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Container from '@/components/Container'

export default function Header() {
  return (
    <header>
      <Container>

      <div className='flex justify-between items-center gap-4'>      
            <p>Invoicey</p>
            <div>
                    <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
            </div>
      </div>
      </Container>
    </header>
  )
}
