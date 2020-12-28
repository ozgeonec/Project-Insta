import React from 'react'
import styles from './navigation.module.css'


function Navigation({ children, className, ...props }) {
    return (
        <div className={styles.nav}{...props}>
           <h1 className={styles.logo}>pembepanjur</h1>
        </div>
    )
}
export default Navigation