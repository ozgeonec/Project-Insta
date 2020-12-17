import React from 'react'
import styles from './post.module.css'
//import cn from 'classnames'
import Profile from "../profile/profile";
import IconBox from "../icon-box/icon-box";
import ZoomSlider from 'react-instagram-zoom-slider'
import Images from "../image/images";

function Post({ children, className, ...props }) {
    //const slides = [<img src="https://images.squarespace-cdn.com/content/v1/55cfb535e4b061baebe310df/1587472623697-IC8B3J3ZIZI0AMIE7U8G/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/sky+photo+for+website+home+page.jpeg?format=2500w" alt="First slide" />, <img src="../../constants/photoex.jpg" alt="Second slide" />]
    return (
        <div className={styles.post}{...props}>
         <Profile/>
         <Images/>
         <IconBox/>
    </div>
    )
}
export default Post