import React, {useState} from 'react'
import styles from './icon-box.module.css'


import {
    Fav60B,
    Favact,
    Messageİcon,
    Sendms,
    Unlikedİcon2X,
    Wink60B,
    Winkact
} from "../icons";
import TextMain from "../text/text-main";

function IconBox({ className,liked, ...props }) {
    const [like,setLike] = useState(false)
    const[wink,setWink] = useState(false)
    const[fav,setFav] = useState(false)
    const [count,setCount]=useState(0)


    return (<div className={styles.icons} {...props}>
            <TextMain className={styles.text}>{count}</TextMain>
            <div className={styles.button}>
               {!like ? <Unlikedİcon2X onClick={()=> {
                   setLike(!like);
                   setCount(count + 1);
                   liked=true;
               }}/> : <Sendms onClick={()=> {
                   setLike(!like)
                   setCount(count - 1)
                   liked=false;
               }}/> }
               {!wink ? <Wink60B onClick={()=>setWink(!wink)}/> : <Winkact onClick={()=>setWink(!wink)}/>}
               {!fav ? <Fav60B onClick={()=>setFav(!fav)}/> : <Favact onClick={()=>setFav(!fav)}/>}
               <Messageİcon/>
            </div>
            </div>
    )
}
export default IconBox