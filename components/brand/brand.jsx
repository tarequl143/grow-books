"use client";

import Image from "next/image";

export const Logo = () => {
    return (
        <div className="inline-flex">
            <Image src="/assets/images/logo.png" alt="Logo" width={52} height={32} />
        </div>
    )
}