import Footer from './footer'
import Header from './header'

interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <head>
        <title>Portfolio | JZZTN</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      
      <section className="h-screen grid grid-rows-[auto,1fr,auto] [&>*>div]:max-w-7xl [&>*>div]:mx-auto [&>*>div>*]:px-4 [&>*>div>*]:lg:px-0">
        <div className='bg-secondary fixed top-0 left-0 right-0 z-50'>
          <Header />
        </div>
        
        <main>
          {children}
        </main>

        <div>
          <Footer />
        </div>
      </section>
    </>
  )
}

export default Layout
