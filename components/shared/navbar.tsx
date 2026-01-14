"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  
    <nav className="bg-zinc-700 p-1 max-h-12">
    <div className="flex justify-between items-center ml-3 mr-3">
       
        <Link className='hover:bg-zinc-800 text-white text-[16px] transition-all duration-300' href="/pipa">MtWin - админка для пользователей</Link>
        
       
        <div className="flex flex-col text-right">
          <span className="text-sm">Welcome back</span>
          <span className="text-xs text-gray-400">user@example.com</span>
        </div>
      </div>
      
    </nav>
    
  );
}