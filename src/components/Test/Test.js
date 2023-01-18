import React from 'react';
import './Test.css';

export const Test = () => {
    const sum = (a, b) => a + b;
    return <div className='test'>Hello its test {sum(1, 3)}</div>
}