import React, {useState} from 'react'
import styles from './post.module.css'
//import cn from 'classnames'
import Profile from "../profile/profile";
import IconBox from "../icon-box/icon-box";

import Images from "../image/images";
import TextMain from "../text/text-main";
import ActionBox from "../action-box/action-box";


function Post({ children, className,src, flat=true, ...props }) {

    return (
        <div className={styles.post}{...props}>
         <Profile/>
         <TextMain>{children}</TextMain>
         {flat && <Images className={styles.img} src={src}/>}
         <ActionBox/>
         <IconBox/>
    </div>
    )
}
export default Post