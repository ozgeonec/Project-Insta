import React from 'react'
import styles from './show-button.module.css'
import {DownArrow} from "../icons";
import TextMain from "../text/text-main";




function ShowButton({ children, className, ...props }) {

    return (
        <button className={styles.button}{...props}>
            <DownArrow/>
            <TextMain>Show More</TextMain>
        </button>
    )
}
export default ShowButton