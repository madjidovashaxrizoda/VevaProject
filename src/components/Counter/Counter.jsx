import React, { useState } from 'react';
import left from "../../assets/left.png"
import right from "../../assets/right.png"

export default function Counter({ count, setCount, total, setTotal, kuler, setKuler, pompa, setPompa }) {

    
    const incrementCount = () => {
        setCount(count + 1);
       setTotal(total + 15000);
       setKuler(kuler + 2699000);
setPompa(pompa + 265000);
    }

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
            setTotal(total - 15000);
            setKuler(kuler - 2699000);
            setPompa(pompa - 265000);
        }
    }

    return (
        <div className ="flex gap-3 items-center justify-center py-3 px-5 bg-white rounded-md">
            <button onClick={decrementCount}>
                <img src={left} alt="" />
            </button>
            <p class="text-lg">{count}</p>
            <button onClick={incrementCount}>
                <img src={right} alt="" />
            </button>
        </div>
    )
}