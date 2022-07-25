import React from 'react';
import styles from './NewsDaily.module.css';



const NewsDaily=(props)=>{
    return(
        <div className={styles.Parent}>
        <div className={styles.OuterDiv}>
            <div className={styles.Text} >
            <p className={styles.Title} >{props.title}</p>
            <p className={styles.Desc}>{props.description}......</p>
            <p className={styles.Link}>To read more,visit <a href={props.link} target="_blank" rel="noopener noreferrer">{props.link}</a></p>
            <p className={styles.Foot}><span>{props.author}, {props.heading}</span></p>
            <p className={styles.Time}><span >{props.time}</span></p>
            </div>
            <div>
            <img src={props.image} alt="news"/>
            </div>
        </div>
        <hr className={styles.Line}/>
        </div>
    );
}

export default NewsDaily;