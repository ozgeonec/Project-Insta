import React from 'react'
import cn from 'classnames'
import styles from './avatar.module.css'

function Avatar({ src, alt, size = 40,border=false,className, ...props }) {
    return (
        <div className={cn([styles.photo] , border && styles.border, className)} style={{ width: size, height: size }} {...props}>
            <img
                className={styles.img}
                src={src}
                alt={alt}
            />
        </div>
    )
}


export default Avatar