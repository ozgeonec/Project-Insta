import React from 'react'
import cn from 'classnames'
import styles from './avatar.module.css'

function Avatar({ src, alt, size = 30,border=false, ...props }) {
    return (
        <button className={cn([styles.photo] , border && styles.border)} style={{ width: size, height: size }} {...props}>
            <img
                className={styles.img}
                src={src}
                alt={alt}
            />
        </button>
    )
}


export default Avatar