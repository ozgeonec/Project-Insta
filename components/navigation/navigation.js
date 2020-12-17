import React from 'react'
import styles from './navigation.module.css'
import Avatar from "../avatar/avatar";
import {Panj} from "../icons";

function Navigation({ children, className, ...props }) {
    return (
        <div className={styles.nav}{...props}>
           <h1 className={styles.logo}>pembepanjur</h1>
            <Avatar/>
        </div>
    )
}
export default Navigation