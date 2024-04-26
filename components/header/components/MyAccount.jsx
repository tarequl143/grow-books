'use client';

import React from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from "next/image";
import { LogOut, Settings } from "lucide-react";


export const MyAccount = () => {

  return (

        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="focus:outline-none">
                <Image src="/assets/images/icons/user-circle.png" alt="Grid" width={30} height={30} />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="inline-flex bg-white w-[200px] rounded-lg border border-[#e0e4e7] flex-col absolute top-full -right-8 mt-2 shadow-dropdown">
                    <DropdownMenu.Item className="flex items-center text-sm hover:bg-[#f7f8fa] p-3 text-[#1a2849] hover:border-none hover:outline-none">
                        <Settings className="mr-2 h-4 w-4" />
                        <span className="font-sans">My Account</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className="h-[1px] w-full bg-[#e6e8ec]" />
                    <DropdownMenu.Item className="flex items-center text-sm hover:bg-[#f7f8fa] p-3 text-[#1a2849] hover:border-none hover:outline-none">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span className="font-sans">Log out</span>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>

  );
};
