import React from 'react'
import styles from './story-box.module.css'
import Avatar from "../avatar/avatar";



function StoryBox({ children, className, ...props }) {

    return (
        <div className={styles.box}{...props}>
            <Avatar border size="40px"/>
            <Avatar border size="40px"/>
        </div>
    )
}
export default StoryBox