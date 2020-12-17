import styles from './action-box.module.css'
import cn from 'classnames'
import {Likesblue, Unlikedİcon2X} from "../icons";
import TextSmall from "../text/text-small";


function ActionBox({ className,count,blue=false, ...props }) {
    return (
        <div className={styles.box}{...props}>
            <TextSmall>{count}</TextSmall>
            {blue ? <Likesblue/> : <Unlikedİcon2X/>}
            <TextSmall>Ty, Daniel, Homer and other 3 people</TextSmall>
        </div>
    )
}
export default ActionBox