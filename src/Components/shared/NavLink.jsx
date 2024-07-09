"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink(props) {
  const pathname = usePathname()
  const isActive = (path)=> {
    if(path === "/"){
      return pathname === path; 
    }
    return pathname.startsWith(path)
  }
  return (
    <Link {...props} className={`${props.className} ${isActive(props.href) ? "active" : null}`}>
      {props.children}
    </Link>
  )
}