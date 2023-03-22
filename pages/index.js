import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Content from './Content'

export default function Home() {
  return (
    <>
      <Head>
        <title>Valence DAO</title>
        <meta name="description" content="Valence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href=""/>
      </Head>
      <main>
        <nav className='navbar'>
        <li className='name'>valenceDAO</li>
          <ul className='topics'>
            <li> <Link href='/'>Home</Link></li>
            <li><Link href="/docs">Docs</Link></li>
            <li><Link href='/demo'>Demo</Link></li>
          </ul>
        </nav>
        <section className='landing'>
        <h1>ValenceDAO</h1>
        <h2>Valence helps you to connect with researchers in DeSci and explore pool of opportunities</h2>
        <button className='btn'><Link href="/docs" style={{backgroundColor: "#4B0150"}}>Know More</Link></button>
        </section>
        <Content/>
        <div className='footer'>
          <p style={{backgroundColor: "transparent",}}>valenceDAO</p>
        </div>
      </main>
    </>
  )
}
