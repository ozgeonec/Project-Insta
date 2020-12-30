import React from 'react'
import styles from './img-story.module.css'
import cn from 'classnames'


function ImageStory({ children, className,src="https://www.greenandgorgeousflowers.co.uk/wpcms/wp-gandg-content/uploads/2019/12/92173.jpg", ...props }) {
    return (
        <div className={cn(styles.container, className)} {...props}>
            <img className={cn(styles.img)} src={src} alt="First slide" />
        </div>
    )
}
export default ImageStory