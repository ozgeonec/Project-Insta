import React from 'react'
import styles from './layout.module.css'
import cn from 'classnames'
import Navigation from "../navigation/navigation";
import Post from "../post/post";

function Layout({ ...props }) {

    return (
        <div className={cn(styles.layout)}{...props}>
            <Navigation/>
            <Post/>
        </div>
    )
}

export default Layout