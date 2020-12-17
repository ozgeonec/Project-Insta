import React from 'react'
import styles from './navigation.module.css'
import Avatar from "../avatar/avatar";

function Navigation({ children, className, ...props }) {
    return (
        <div className={styles.nav}{...props}>
           <h1>LOGO</h1>
            <Avatar/>
        </div>
    )
}
export default Navigation