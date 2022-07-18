import { useState, useRef } from 'react'

import Stories from 'react-insta-stories'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCube } from "swiper"

import { images1, images2 } from '../../data/images'

import "swiper/css/effect-cube"
import "swiper/css/pagination"

import "swiper/css"
import './horizontal.scss'


const Horizontal = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const swiperRef = useRef()

  const handleClick = (event, arr) => {
    if (event.pageX > document.body.offsetWidth / 2) {
      currentIndex !== arr.length - 1 ? setCurrentIndex(currentIndex + 1) : swiperRef.current.slideNext()
    }
    if (event.pageX < document.body.offsetWidth / 2) {
      currentIndex !== 0 ? setCurrentIndex(currentIndex - 1) : swiperRef.current.slidePrev()
    }
  }

  console.log(currentIndex)

  return (
    <div className="container">
      <div className="wrapper">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect={"cube"}
          modules={[EffectCube]}
          className="mySwiper"
          onSlideNextTransitionStart={() => {
            setCurrentIndex(0)
          }}
          onSlidePrevTransitionStart={() => {
            setCurrentIndex(0)
          }}>
          <SwiperSlide preventclicks="false" onClick={(event) => handleClick(event, images1)}>
            <Stories
              stories={images1}
              currentIndex={currentIndex}
              width={"100%"}
              height={"600px"}
              defaultInterval={5000}
              onStoryEnd={() => setCurrentIndex(currentIndex + 1)}
              onAllStoriesEnd={() => {
                swiperRef.current.slideNext()
              }}
            />
          </SwiperSlide>
          <SwiperSlide onClick={(event) => handleClick(event, images2)}>
            <Stories
              stories={images2}
              currentIndex={currentIndex}
              width={"fit-content"}
              height={"fit-content"}
              defaultInterval={5000}
              onStoryEnd={() => setCurrentIndex(currentIndex + 1)}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Horizontal