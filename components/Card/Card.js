import React from 'react';
import styles from './Card.module.css'

const Card = ({cat}) => {
    const {name, phone, image, id, email} = cat
    return (
        <div className={styles.card}>
            <div className={styles["card-header"]}>
                <img src={image?.url} alt=""  className={styles["card-img"]}/>
            </div>

            <div>
                <h3>{name}</h3>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
            
        </div>
    );
};

export default Card;