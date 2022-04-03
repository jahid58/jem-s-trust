import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Introduction from '../components/introduction'
import Slider from '../components/sliders'

import Navbar from './../components/navbar'

function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(true)

  return (
    <>
      <Head>
        {' '}
        <title>jem's Trust</title>
      </Head>
      <Navbar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Header />
      <Slider />
      <Introduction />
      <Footer />
    </>
  )
}

export default Home
