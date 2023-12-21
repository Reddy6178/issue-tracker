'use client';
import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const links =[
        { label : "Dashboard", href : "/"},
        { label : "Issues", href : "/issues"}
    ];
    const currentPath = usePathname();
  return (
    <nav className='flex space-x-6 mb-5 border-b px-5 h-14 items-center'>
        <Link href="/"> <AiFillBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link =>
                <Link
                    className={classNames({
                        'text-zinc-900' : link.href === currentPath,
                        'text-zinc-400' : link.href !== currentPath,
                        'hover: text-zinc-600 transition-colors' : true
                    })}
                    key={link.label}
                    href={link.href}>{link.label}
                </Link>
            )}
        </ul>
    </nav>
  )
}

export default NavBar;