import React from 'react'
import styles from './story.module.css'
import cn from 'classnames'
import Profile from "../profile/profile";
import Images from "../image/images";
import ImageStory from "../image/img-story";
import Avatar from "../avatar/avatar";
import TextHeader from "../text/text-header";


function Story({ src2="https://www.greenandgorgeousflowers.co.uk/wpcms/wp-gandg-content/uploads/2019/12/92173.jpg",name="Özge", className, ...props }) {

    return (<div className={cn(styles.story, className)}{...props}>
            <div className={styles.profile}>
                <Avatar src={"https://pbs.twimg.com/profile_images/1317573845944029184/e_bgjyJO_400x400.jpg"} className={styles.avatar}/>
                <TextHeader className={styles.text}>{name}</TextHeader>
            </div>
            <ImageStory src={src2} className={styles.img}/>
        </div>
    )
}
export default Story