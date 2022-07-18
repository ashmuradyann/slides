import { Swiper, SwiperSlide } from "swiper/react"

import { images1 } from '../../data/images'

import "swiper/css/bundle"
import "swiper/css"
import './vertical.scss'

const Vertical = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <Swiper
                style={{height: "fit-content", maxHeight: "600px"}}
                    direction={"vertical"}
                    className="mySwiper">
                    {images1.map((el, i) => {
                        return <SwiperSlide><img src={el} alt="img" /></SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Vertical