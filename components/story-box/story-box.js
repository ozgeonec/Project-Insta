import React from 'react'
import styles from './story-box.module.css'
import {useRouter} from "next/router";
import Profile from "../profile/profile";



function StoryBox({ children, className, ...props }) {
    const router = useRouter()
    return (
        <div className={styles.box}{...props}>
            <Profile flat={false} onClick={() => router.push('/story')} src="https://pbs.twimg.com/profile_images/1317573845944029184/e_bgjyJO_400x400.jpg"/>
            <Profile flat={false} name="Emre" src="https://pbs.twimg.com/profile_images/1334469693760040960/wEqj0fhC_400x400.jpg"/>

        </div>
    )
}
export default StoryBox