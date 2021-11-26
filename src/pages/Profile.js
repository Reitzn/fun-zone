import React from 'react'
import { useAuth } from '../firebase'


export default function About() {
    const currentUser = useAuth();
    return (
        <div>
             <h1>Welcome: {currentUser?.email}</h1>
        </div>
    )
}

