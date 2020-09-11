import React from 'react';

export function round(num){
    return num.toFixed(3);
}

export function round05(num){
    const _num = parseFloat(num).toFixed(2);
    const numRound = Math.floor(_num);
    console.log('num _num', _num, numRound);
    if(_num<0.25) {return 0.25}
    else{
        if(_num>0.25&&_num<0.5){
            return 0.5;
        }else{
            if(_num>0.5&&_num<1){
                return 1;
            }else{
                if((_num-numRound.toFixed(2))>=0.25&&(_num - numRound.toFixed(2))<=0.5) {
                    return numRound+0.5;
                }else {
                    if((_num - numRound.toFixed(2))>0.5){
                        return (numRound+1).toFixed(2)
                    }
                    else {return numRound.toFixed(2)}
                }
            }
            
        }
        
    }
}