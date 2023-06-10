import Link from 'next/link'
import React from 'react'

const links=[
    {
      id: 1,
      title: "Home",
      url: "/",  
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/",  
    },
    {
        id: 3,
        title: "Blog",
        url: "/",  
    },
    {
        id: 4,
        title: "About",
        url: "/",  
    },
    {
        id: 5,
        title: "Contacts",
        url: "/",  
    },

    {
        id: 6 ,
        title: "Dashboard",
        url: "/",  
    },
]

const Navbar = () => {
  return (
    <div>
        <Link href="/">maow</Link>
        <div>
            {links.map(link=>{
                <Link key={link.id} href={link.href}>{link.title}</Link>
            })}
        </div>
    </div>
 
  )
}

export default Navbar