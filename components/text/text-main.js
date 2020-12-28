import React from 'react'
import styles from './text-main.module.css'
import cn from 'classnames'

function TextMain({ children,padded, className, ...props }) {
    return (
        <span className={cn(styles.text)}{...props}>
      {children}
    </span>
    )
}
export default TextMain