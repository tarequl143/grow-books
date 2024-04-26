'use client';

import React from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from "next/image";
import Link from "next/link";


export const OtherTools = () => {

  return (

        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="focus:outline-none">
                <Image src="/assets/images/icons/grid.svg" alt="Grid" width={24} height={24} />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="inline-flex bg-white w-[320px] rounded-lg border border-[#e0e4e7] flex-col absolute top-full -right-8 mt-2 shadow-dropdown p-5">
                    <div className="flex w-full flex-col border-b border-[#e0e4e7] pb-4">
                        <h4 className="uppercase text-[#71757a] text-[13px] pb-2.5 leading-tight font-sans tracking-[.65px]">Curriculum</h4>
                        <div className="flex -mx-2">
                            <div className="inline-flex w-1/2 px-2">
                                <Link href="/" className="p-3 border border-[#e6e8ec] rounded-md w-full inline-flex items-center justify-center hover:bg-[#f5f8e9]">
                                    <Image src="/assets/images/grow-kids.png" alt="Grow Kids" width={108} height={36} />
                                </Link>
                            </div>
                            <div className="inline-flex w-1/2 px-2">
                                <Link href="/" className="p-3 border border-[#e6e8ec] rounded-md w-full inline-flex items-center justify-center hover:bg-[#f5f8e9]">
                                    <Image src="/assets/images/grow-students.png" alt="Grow Kids" width={108} height={36} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col pt-4">
                        <h4 className="uppercase text-[#71757a] text-[13px] leading-tight font-sans tracking-[.65px]">CHURCH LEADER TOOLS</h4>
                        <div className="flex flex-wrap -mx-2">
                            <div className="inline-flex w-1/3 px-2 mt-4">
                                <Link href="/" className="px-2 w-full inline-flex flex-col space-y-2 items-center">
                                    <Image src="/assets/images/tool1.svg" alt="Grow Kids" width={40} height={40} />
                                    <h6 className="text-[#000] text-xs text-center">Free VBS</h6>
                                </Link>
                            </div>
                            <div className="inline-flex w-1/3 px-2 mt-4">
                                <Link href="/" className="px-2 w-full inline-flex flex-col space-y-2 items-center">
                                    <Image src="/assets/images/tool1.svg" alt="Grow Kids" width={40} height={40} />
                                    <h6 className="text-[#000] text-xs text-center">Free VBS</h6>
                                </Link>
                            </div>
                            <div className="inline-flex w-1/3 px-2 mt-4">
                                <Link href="/" className="px-2 w-full inline-flex flex-col space-y-2 items-center">
                                    <Image src="/assets/images/tool1.svg" alt="Grow Kids" width={40} height={40} />
                                    <h6 className="text-[#000] text-xs text-center">Free VBS</h6>
                                </Link>
                            </div>
                            <div className="inline-flex w-1/3 px-2 mt-4">
                                <Link href="/" className="px-2 w-full inline-flex flex-col space-y-2 items-center">
                                    <Image src="/assets/images/tool1.svg" alt="Grow Kids" width={40} height={40} />
                                    <h6 className="text-[#000] text-xs text-center">Free VBS</h6>
                                </Link>
                            </div>
                            <div className="inline-flex w-1/3 px-2 mt-4">
                                <Link href="/" className="px-2 w-full inline-flex flex-col space-y-2 items-center">
                                    <Image src="/assets/images/tool1.svg" alt="Grow Kids" width={40} height={40} />
                                    <h6 className="text-[#000] text-xs text-center">Free VBS</h6>
                                </Link>
                            </div>
                            <div className="inline-flex w-1/3 px-2 mt-4">
                                <Link href="/" className="px-2 w-full inline-flex flex-col space-y-2 items-center">
                                    <Image src="/assets/images/tool1.svg" alt="Grow Kids" width={40} height={40} />
                                    <h6 className="text-[#000] text-xs text-center">Free VBS</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>

  );
};
