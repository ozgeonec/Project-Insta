import React from 'react'
import styles from './text-main.module.css'
import cn from 'classnames'

function TextMain({ children, nonText=false,className, ...props }) {
    return (
        <span className={cn(styles.text, nonText && styles.none, className)}{...props}>
      {children}
    </span>
    )
}
export default TextMain