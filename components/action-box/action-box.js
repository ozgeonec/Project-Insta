import styles from './action-box.module.css'
import cn from 'classnames'
import {Likesblue} from "../icons";
import TextSmall from "../text/text-small";


function ActionBox({ className, ...props }) {
    return (
        <div className={styles.box}{...props}>
            <Likesblue/>
            <TextSmall>Ty, Daniel, Homer and other 3 people</TextSmall>
        </div>
    )
}
export default ActionBox