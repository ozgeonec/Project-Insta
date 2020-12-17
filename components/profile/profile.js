import styles from './profile.module.css'
import cn from 'classnames'
import Avatar from "../avatar/avatar";
import TextHeader from "../text/text-header";
import TextSmall from "../text/text-small";
import formatDate from 'date-fns/formatDistanceToNowStrict'
import Dots from "../icons/Dots";

function Profile({ className,name="Ozge",date=new Date('2020-10-22'),flat=true,src, ...props }) {
    return (
        <div className={cn(styles.box, !flat && styles.unflat)}{...props}>
            {!flat ? <Avatar border src={src}/> : <Avatar src={src}/>}
            <div className={styles.body}>
                <TextHeader>{name}</TextHeader>
                {flat && <TextSmall>{formatDate(date)}</TextSmall>}
            </div>
            {flat && <Dots className={styles.icon}/>}
        </div>
    )
}
export default Profile