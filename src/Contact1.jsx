import React, { useContext } from 'react'
import { UserContext } from './App';

function Contact1() {
    const { str } = useContext(UserContext);
    return (
        <div>Contact1{str}</div>
    )
}

export default Contact1