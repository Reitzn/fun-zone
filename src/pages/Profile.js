import React from 'react'
import { useAuth } from '../firebase'


export default function Profile() {
    const currentUser = useAuth();
    return (
        <div>
             <h1>Welcome: {currentUser?.email}</h1>
        </div>
    )
}

