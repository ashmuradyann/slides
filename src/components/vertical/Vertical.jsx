import { Swiper, SwiperSlide } from "swiper/react"

import { images } from '../../data/images'

import "swiper/css/bundle"
import "swiper/css"
import './vertical.scss'

const Vertical = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <Swiper
                    direction={"vertical"}
                    className="mySwiper">
                    {images.map((el, i) => {
                        return <SwiperSlide><img src={el} alt="img" /></SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Vertical