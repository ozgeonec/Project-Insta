import React from 'react'
import styles from './post.module.css'
import cn from 'classnames'
import Profile from "../profile/profile";
import IconBox from "../icon-box/icon-box";

import Images from "../image/images";
import TextMain from "../text/text-main";
import ActionBox from "../action-box/action-box";


function Post({ children, className,src, flat=true,name,asrc, ...props }) {

    return (
        <div className={styles.post}{...props}>
             <Profile className={cn(styles.profile)} name={name} src={asrc}  />
             <TextMain padded>{children}</TextMain>
             {flat && <Images className={cn(styles.img)} src={src}/>}
             <hr className={styles.hr}/>
             <ActionBox blue={true}/>
             <hr className={styles.hr}/>
             <IconBox />
        </div>
    )
}
export default Post