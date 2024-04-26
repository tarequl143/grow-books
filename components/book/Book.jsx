import { Button } from "../button";
import Image from "next/image"


export const Book = ({imageUrl, title, author, description, price}) => {
    return (
        <div className="flex w-1/5 px-4 flex-col py-5 space-y-4">
            <div className="flex w-full h-[350px] rounded-lg overflow-hidden">
                <Image src={imageUrl || "/assets/images/book1.png"} alt="Book" width={240} height={350} className="w-full h-full object-cover object-center rounded-lg" />
            </div>
            <div className="flex w-full flex-col">
                <h4 className="mb-1.5 text-[20px] text-[#091D37] leading-snug font-bold">{title}</h4>
                {author &&
                    <h6 className="text-[#69717A] text-[12px] font-semibold leading-[14px] mb-1.5 font-sans">By {author}</h6>
                }
                {description &&
                    <p className="text-[#69717A] text-[12px] font-normal leading-[16px] mb-4 font-sans">{description}</p>
                }
                <h5 className="text-[#091D37] text-base font-bold leading-snug mb-4">${price}</h5>
            </div>
            <Button />
        </div>
    )
}