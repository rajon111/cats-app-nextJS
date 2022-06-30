import Link from 'next/link'
import React from 'react'

export default function Nav() {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <Link href='/' className="navbar-brand mb-0 h1">Navbar</Link>
            </div>
            
        </nav>
    )
}

