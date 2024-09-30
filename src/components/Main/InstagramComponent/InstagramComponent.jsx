import styles from "./InstagramComponent.module.css";

import React, { useState } from "react";

// Следующие два объекта созданы, как заглушки чтобы можно было использовать .map 
// и не создавать много div-ов


const initialData = [
    {
    _id: 1
    },
    {
    _id: 2
    },
    {
    _id: 3
    },
    {
    _id: 4
    },
    {
    _id: 5
    },
]

const additionalData = [
    {
    _id: 6
    },
    {
    _id: 7
    },
    {
    _id: 8
    },
    {
    _id: 9
    },
    {
    _id: 10
    },
    {
    _id: 11
    },
    {
    _id: 12
    },
    {
    _id: 13
    },
]



export const InstagramComponent = () => {
   
    const [photos, addPhotos] = useState(initialData)

    
  return (
    <div className={styles.inst_container}>
        <h2 className={styles.block_head}>Мы в инстаграмме</h2>
        <div className={styles.gallery}>
            {
                photos.map((item) => (
                    <div key={item._id} className={item._id === 1 ? `${styles.item1}` : `${styles.item}`}>lorem</div>
                ))
            }
        </div>
        <button onClick={() => addPhotos([...initialData, ...additionalData])} className={styles.inst_btn}>
            Показать ещё
        </button>
    </div>
  );
};
