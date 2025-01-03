'use client';
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {

const path=usePathname();
useEffect(() => {
    console.log(path);
},[]);

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <div className="flex items-center">
    <Image src="/assets/logo.svg" alt="logo" width={25} height={25} />
    <span className="text-xl text-[#4F46E5] ml-2">RehearsalAI</span>
</div>

     
<ul className='hidden md:flex gap-6'>
          <Link href={"/dashboard"}>
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard'&&'text-primary font-bold'}
            `}
            
            >Dashboard</li>
            </Link>
            
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/questions'&&'text-primary font-bold'}
            `}>Questions</li>
              <Link href={"/dashboard/upgrade"}>
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/upgrade'&&'text-primary font-bold'}
            `}>Upgrade</li>
            </Link>
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/how'&&'text-primary font-bold'}
            `}>How it Works?</li>
        </ul>
     <UserButton/>
    </div>
  )
}

export default Header
