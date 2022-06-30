import React from 'react';
import styles from './Card.module.css'

const Card = ({name, phone, image, id, email}) => {
    return (
        <div className={styles.card}>
            <div className={styles["card-header"]}>
                <image src={image.url} alt=""  className={styles["card-img"]}/>
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