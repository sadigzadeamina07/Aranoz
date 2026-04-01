import React from 'react'
import { SlBasket } from "react-icons/sl";
import { CiHeart,CiMenuBurger } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
function Header() {
    return (
        <div className='bg-[#ecfdff]'>

            <div className='max-w-[1200px] mx-auto py-5'>
                <div className="flex justify-between   items-center">
                    <img src="/logo.png"  className="object-cover" alt="" />
                    <ul className='hidden md:flex  justify-center gap-6 text-lg'> 
                        <li>Home</li>
                        <li>
                            Shop
                        </li>
                        <li>Pages
                        </li>
                        <li>Blog
                        </li>
                        <li>Contact</li>
                    </ul>
                
                    <div className="flex gap-3  text-xl">
                        <HiMagnifyingGlass />
                        <CiHeart />
                                <SlBasket  />
                                    <CiMenuBurger className='flex md:hidden ' />
                    </div>
            
                </div>

            </div>

        </div>

    )
}

export default Header