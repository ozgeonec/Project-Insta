import React from 'react'
import styles from './layout.module.css'
import cn from 'classnames'
import Navigation from "../navigation/navigation";
import Post from "../post/post";
import ShowButton from "../show-button/show-button";
import StoryBox from "../story-box/story-box";

function Layout({ ...props }) {

    return (<div className={cn(styles.layout)}{...props}>
            <Navigation/>
            <StoryBox/>
            <Post asrc="https://pbs.twimg.com/profile_images/1317573845944029184/e_bgjyJO_400x400.jpg" hideText={true}/>
            <Post children="Lorem ipsum" flat={false} name="Emre" asrc="https://pbs.twimg.com/profile_images/1334469693760040960/wEqj0fhC_400x400.jpg"/>
            <ShowButton />
        </div>
    )
}


export default Layout