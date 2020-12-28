import React from 'react'
import styles from './text-main.module.css'
import cn from 'classnames'

function TextMain({ children, className, nonText=false, ...props }) {
    return (
        <span className={cn(styles.text, nonText && styles.none)}{...props}>
      {children}
    </span>
    )
}
export default TextMain