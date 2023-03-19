import React, { useEffect, useState } from 'react';
import Bar from '../Bar/Bar';
import styles from './OverlayCard.module.css'

interface Props {
    title: string,
    body?: string,
    textSize?: 'lg' | 'sm'
}

const OverlayCard = (props: Props) => {
    let { title, body, textSize } = props
    return (
        <div className={styles.cardContainer}>
            <div className={styles.body}>
                <h3 className={`${textSize ? styles[textSize] : 'lg'}`}>{title}</h3>
                {body && (<p className={`mt-5`}>{body}</p>)}

            </div>
            {/* <div className={styles.bar}>
                <Bar color='red'/>
            </div> */}
        </div>
    )
}

export default OverlayCard