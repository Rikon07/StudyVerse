import { buttonVariants } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import Logo from '@/public/Bashlogo.png'
import Image from 'next/image'
export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <div className='relative flex min-h-svh flex-col items-center justify-center'>

        <Link href="/" className={buttonVariants({
            variant: 'outline', className: 'absolute top-4 left-4'
        })}>
            <ArrowLeft className='size-4' />Back
        </Link>
      <div className='flex w-full max-w-sm flex-col gap-6'>

        <div className="flex w-full max-w-sm flex-col gap-6">
                    <Link className="flex gap-2 items-center self-center font-medium" href="/">
                        <Image src={Logo} alt="logo" width={32} height={32} />
                        Study-verse LMS
                    </Link>
                </div>
        {children}

        <div className="text-balance text-center text-xs text-muted-foreground">
                    <p>By clicking continue, you agree to our
                        {" "}
                        <span className="hover:text-primary hover:underline">Terms of Service</span>
                        {" "} and
                        <span className="hover:text-primary hover:underline"> Privacy Policy</span>
                    </p>
                </div>
      </div>
    </div>
  )
}
