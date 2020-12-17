import React from 'react'
import styles from './text-main.module.css'
import cn from 'classnames'

function TextMain({ children, className, ...props }) {
    return (
        <span className={styles.text}{...props}>
      {children}
    </span>
    )
}
export default TextMain