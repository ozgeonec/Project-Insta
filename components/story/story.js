import React from 'react'
import styles from './story.module.css'
//import cn from 'classnames'
import Profile from "../profile/profile";
import Images from "../image/images";


function Story({ className, ...props }) {

    return (<div className={styles.story}{...props}>
            <div className={styles.container}>
                <Profile/>
                <Images/>
            </div>

        </div>
    )
}
export default Story