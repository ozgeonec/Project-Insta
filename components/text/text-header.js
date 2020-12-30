import React from 'react'
import styles from './text-header.module.css'
import cn from 'classnames'

function TextHeader({ bold = false, children, className, ...props }) {
    return (
        <span
            className={cn(styles.header, className)}
            {...props}
        >
      {children}
    </span>
    )
}
export default TextHeader