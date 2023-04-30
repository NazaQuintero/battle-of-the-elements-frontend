import React from "react";

import styles from './Button.module.scss'

export type ButtonProps = {
    label: string
}

export const Button = ( { label }: ButtonProps) => {
    return (
        <button className={styles.red}>{ label }</button>
    );
}