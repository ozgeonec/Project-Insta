import styles from './profile.module.css'
import cn from 'classnames'
import Avatar from "../avatar/avatar";
import TextHeader from "../text/text-header";
import TextSmall from "../text/text-small";
import formatDate from 'date-fns/formatDistanceToNowStrict'
import Dots from "../icons/Dots";

function Profile({ className,name="Ozge",date=Date.now(), ...props }) {
    return (
        <div className={styles.box}{...props}>
            <Avatar/>
            <div className={styles.body}>
                <TextHeader>{name}</TextHeader>
                <TextSmall>{formatDate(date)}</TextSmall>
            </div>
            <Dots className={styles.icon}/>
        </div>
    )
}
export default Profile