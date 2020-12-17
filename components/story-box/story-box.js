import React from 'react'
import styles from './story-box.module.css'
import Avatar from "../avatar/avatar";
import {useRouter} from "next/router";



function StoryBox({ children, className, ...props }) {
    const router = useRouter()
    return (
        <div className={styles.box}{...props}>
            <Avatar border size="40px" onClick={() => router.push('/story')}/>
            <Avatar border size="40px"/>
        </div>
    )
}
export default StoryBox