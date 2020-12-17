import React from 'react'
import styles from './icon-box.module.css'


import {Fav60Active, Fav60B, Messageİcon, Sendms, Unlikedİcon2X, Wink60Active, Wink60B} from "../icons";

function IconBox({ className,likeCount=0, liked,winked,faved, ...props }) {
    return (<div className={styles.icons} {...props}>
            <p>{likeCount}</p>
            {!liked ? <Unlikedİcon2X/> : <Sendms/> }
            {!faved ? <Fav60B/> : <Fav60Active/>}
            {!winked ? <Wink60B/> : <Wink60Active/>}
            <Messageİcon/>
        </div>
    )
}
export default IconBox