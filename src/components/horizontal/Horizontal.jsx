import Stories from 'react-insta-stories'

import { images } from '../../data/images'

import './horizontal.scss'

const Horizontal = () => {

  return (
    <div className="container">
      <div className="wrapper">
        <Stories
          stories={images}
          width={432}
          defaultInterval={5000}
          styles={{ boxShadow: "0px 60px 17px -9px rgba(34, 60, 80, 0.71) inset" }}
        />
      </div>
    </div>
  )
}

export default Horizontal