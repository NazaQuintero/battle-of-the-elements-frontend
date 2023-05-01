import React from "react";

import { Button } from 'primereact/button';

import styles from './BoeButton.module.scss';

export type BoeButtonProps = {
    label: string
}

export const BoeButton = ( { label }: BoeButtonProps) => {
    return (
        <div className={`${styles.big} ${styles.red}`}>
            <Button label={ label } />
        </div>
        
    );
}