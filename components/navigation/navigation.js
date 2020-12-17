import React from 'react'
import styles from './navigation.module.css'
import Avatar from "../avatar/avatar";
import {Panj} from "../icons";

function Navigation({ children, className, ...props }) {
    return (
        <div className={styles.nav}{...props}>
           <h1 className={styles.logo}>pembepanjur</h1>
            <Avatar size="30px" src="https://pbs.twimg.com/profile_images/1317573845944029184/e_bgjyJO_400x400.jpg"/>
        </div>
    )
}
export default Navigation