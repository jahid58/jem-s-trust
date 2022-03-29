import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import poster1 from '../public/poster1.jpg'
import poster2 from '../public/poster2.jpg'
import poster3 from '../public/poster3.jpg'

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    fade: true,
    autoplaySpeed: 3000,
  }
  return (
    <div className="h-96 ">
      <div>
        <Slider {...settings}>
          <Image src={poster2} height={800} alt="Slider Avatar" />

          <Image src={poster1} height={800} alt="Slider Avatar" />

          <Image src={poster3} height={800} alt="Slider Avatar" />
        </Slider>
      </div>
    </div>
  )
}

export default Sliders
