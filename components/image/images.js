import React from 'react'
import styles from './images.module.css'
//import cn from 'classnames'
import ZoomSlider from 'react-instagram-zoom-slider'

function Images({ children, className,src="https://www.greenandgorgeousflowers.co.uk/wpcms/wp-gandg-content/uploads/2019/12/92173.jpg", ...props }) {
    const slides = [<img className={styles.img} src={src} alt="First slide" />]
    return (
        <div className={styles.container} {...props}>
            <ZoomSlider slides={slides} />
        </div>
    )
}
export default Images