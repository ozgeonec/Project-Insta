import React from 'react'
import styles from './images.module.css'
//import cn from 'classnames'
import ZoomSlider from 'react-instagram-zoom-slider'

function Images({ children, className, ...props }) {
    const slides = [<img className={styles.img} src="https://www.clickinmoms.com/blog/wp-content/uploads/2013/08/clouds-in-the-sky-instagram-picture-by-projectalicia.jpg" alt="First slide" />]
    return (
        <div className={styles.img} {...props}>
            <ZoomSlider slides={slides} />
        </div>
    )
}
export default Images