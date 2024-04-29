import { Button } from "../button";
import Image from "next/image"


export const Book = ({imageUrl, title, author, description, price}) => {
    return (
        <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 sm:px-4 flex-row items-center sm:items-start sm:flex-col py-5 sm:space-y-4 flex-wrap border-b border-[#ECEEF3] sm:border-none">
            <div className="flex w-[100px] sm:w-full h-[150px] sm:h-[350px] rounded-lg overflow-hidden">
                <Image src={imageUrl || "/assets/images/book1.png"} alt="Book" width={240} height={350} className="w-full h-full object-cover object-center rounded-lg" />
            </div>
            <div className="flex flex-1 sm:flex-initial sm:w-full flex-col pl-4 sm:pl-0">
                <h4 className="mb-1.5 text-[18px] sm:text-[20px] text-[#091D37] leading-[22px] sm:leading-snug font-bold line-clamp-2">{title}</h4>
                {author &&
                    <h6 className="text-[#69717A] text-[12px] font-semibold leading-[14px] mb-1.5 font-sans">By {author}</h6>
                }
                {description &&
                    <p className="text-[#69717A] text-[12px] font-normal leading-[16px] mb-4 font-sans line-clamp-2">{description}</p>
                }
                <h5 className="text-[#091D37] text-base font-bold leading-snug mb-4">${price}</h5>
            </div>
            <Button classes="w-full sm:w-auto mt-4 sm:!mt-0" />
        </div>
    )
}