import React from 'react'
import styles from './story-symbol.module.css'
import cn from 'classnames'





function StorySymbol({ children, className, ...props }) {

    return (
        <svg className={cn(styles.svg, className)}{...props}>
           <rect/>
        </svg>
    )
}
export default StorySymbol