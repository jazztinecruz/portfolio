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
      <section className="h-screen grid grid-rows-[auto,1fr,auto] max-w-7xl mx-auto px-4 lg:px-0">
        <Header />
        <main>{children}</main>
        <Footer />
      </section>
    </>
  )
}

export default Layout
