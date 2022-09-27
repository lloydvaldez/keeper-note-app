import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer>
            <p>made by Lloyd Valdez &copy;{year}</p>
        </footer>
    )
}