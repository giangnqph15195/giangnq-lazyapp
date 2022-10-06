// import React, { useEffect, useState } from 'react'

function useDebounce(func,delay) {
    let timeout;
    return function exeutedFunc(...args){
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(()=>{
            func(...args);
            timeout= null;
        },delay)
    }
}



export default useDebounce
