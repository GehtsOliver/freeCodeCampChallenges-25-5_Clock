import React from 'react'
import styles from "./Control.module.css"

const Control = (props) => {
    return (
        <div className={styles.Control}>
            <h3 className={styles.Header}>{props.name} Length</h3>
            <div className={styles.ControlElement}>
            <button onClick={props.decVal}className={styles.Btn}><i className="fas fa-arrow-down fa-2x"></i></button>
            <h2 className={styles.Header2}>{props.length}</h2>
            <button onClick={props.incVal} className={styles.Btn}><i className="fas fa-arrow-up fa-2x"></i></button>
            </div>
        </div>
    )
}

export default Control
