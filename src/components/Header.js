import React from 'react'
import NavigationBar from './NavigationBar'
import Introduction from './Introduction'

export default function Header() {
    return (
        <div className="header">
            <NavigationBar />
            <Introduction />            
        </div>
    )
}
