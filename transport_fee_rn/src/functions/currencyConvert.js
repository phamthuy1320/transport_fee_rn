import React, {useCallback, useState} from 'react';
import database from '../services/database';

export function currencyConvert() {
    const getData = useCallback(()=>{
        try {
            database.ref("VN_CN").once('value')
            .then(
                (snapshot)=>{
                    console.log(snapshot)
                }
            )
        } catch (error) {
            
        }
    })
    
    
}