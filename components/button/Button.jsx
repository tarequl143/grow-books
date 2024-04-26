import Image from "next/image";
import Link from "next/link";


export const Button = ({as = 'button', icon, text, classes, href, isFullWidth = false, onClick}) => {

    const buttonClasses = `bg-[#AECF6D] text-[#ffffff] ${isFullWidth ? "w-full" : "w-auto"} font-sans space-x-2 inline-flex items-center justify-center py-3 px-4 rounded-md ${classes || ""}`;

    if(as === "a") {
        return (
            <Link href={href || "/"} className={buttonClasses}>
                {icon || <Image src="/assets/images/icons/amazon.png" alt="Icon" width={14} height={14} />}
                <span className="inline-flex text-[14px] leading-[14px] font-medium">{text || "Buy on Amazon"}</span>
            </Link>
        )
    }

    return (
        <button className={buttonClasses} onClick={onClick}>
            {icon || <Image src="/assets/images/icons/amazon.png" alt="Icon" width={14} height={14} />}
            <span className="inline-flex text-[14px] leading-[14px] font-medium">{text || "Buy on Amazon"}</span>
        </button>
    )
}