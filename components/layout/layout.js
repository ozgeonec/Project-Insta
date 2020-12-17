import React from 'react'
import styles from './layout.module.css'
import cn from 'classnames'
import Navigation from "../navigation/navigation";
import Post from "../post/post";
import ShowButton from "../show-button/show-button";
import StoryBox from "../story-box/story-box";

function Layout({ ...props }) {

    return (
        <div className={cn(styles.layout)}{...props}>
            <Navigation/>
            <StoryBox/>
            <Post/>
            <ShowButton/>
        </div>
    )
}

export default Layout