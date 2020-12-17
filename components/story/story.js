import React from 'react'
import styles from './story.module.css'
//import cn from 'classnames'
import Profile from "../profile/profile";
import Images from "../image/images";


function Story({ className, ...props }) {

    return (<div className={styles.story}{...props}>
            <div className={styles.container}>
                <Profile/>
                <Images src="https://inews-prd-a-images.s3.eu-west-2.amazonaws.com/content/uploads/2019/10/shutterstock_1479789158.jpg"/>
            </div>

        </div>
    )
}
export default Story