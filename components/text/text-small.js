import React from 'react'
import styles from './text-small.module.css'
import cn from 'classnames'

function TextSmall({ children, className, ...props }) {
    return (
        <p className={styles.text}{...props}>
      {children}
    </p>
    )
}
export default TextSmall