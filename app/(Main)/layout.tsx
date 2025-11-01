// (Main)/layout.tsx

// import Navbar from './_components/Navbar'
export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='container mx-auto'>
      {/* <Navbar /> */}
      <main className="container mx-auto px-4 mad:px-6 lg:px-8">{children}</main>
    </div>
  )
}
