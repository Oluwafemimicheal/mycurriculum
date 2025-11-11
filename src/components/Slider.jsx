import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination'
import Hero from './Hero';

import heroPic1 from '/assets/images/programming-background-collage (1).jpg'
import heroPic2 from '/assets/images/programming-background-collage.jpg'
import heroPic3 from '/assets/images/slide-3.jpg'


const Slider = () => {

  const component = [<Hero heroPic={heroPic1} />, <Hero heroPic={heroPic2} />, <Hero heroPic={heroPic3} />]
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}

      modules={[Pagination, Autoplay]}
      className="slide">
      {
        component.map((component, index) => {
          return <SwiperSlide key={index}>
            {component}
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default Slider
