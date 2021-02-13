import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <Link href='/voting'>
                <a>voting</a>
            </Link>
        </div>
    )
}

export default Navbar
