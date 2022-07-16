import { useState } from 'react'

import Stories from 'react-insta-stories'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { EffectCube } from "swiper"

import { images1, images2 } from '../../data/images'

import "swiper/css/effect-cube"
import "swiper/css/pagination"

import "swiper/css"
import './horizontal.scss'

const Horizontal = () => {

  const [count, setCount] = useState(1)
  const swiper = useSwiper()

  console.log(count)

  return (
    <div className="container">
      <div className="wrapper">
        <Swiper
          effect={"cube"}
          modules={[EffectCube]}
          passiveListeners={false}
          className="mySwiper"
          onSlideNextTransitionStart={() => setCount(count + 1)}
          onSlidePrevTransitionStart={() => setCount(count - 1)}
          spaceBetween={0}>
          <SwiperSlide>
            {count === 1 && <Stories
              stories={images1}
              keyboardNavigation={true}
              width={"426.5px"}
              defaultInterval={5000}
              styles={{ boxShadow: "0px 60px 17px -9px rgba(34, 60, 80, 1) inset" }}
              onAllStoriesEnd={() => {
                setCount(2)
                swiper.slideNext()
              }}
            />}
          </SwiperSlide>
          <SwiperSlide>
            {count === 2 && <Stories
              stories={images2}
              defaultInterval={5000}
              styles={{ boxShadow: "0px 60px 17px -9px rgba(34, 60, 80, 1) inset" }}
            />}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Horizontal