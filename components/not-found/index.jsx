import Image from "next/image";

export const NotFound = () => {

    return (
        <div className="flex flex-col w-full max-w-[350px] p-6 items-center">
            <Image src='/assets/images/book-open-cover.png' alt="No boks found" width={48} height={38} />
            <h3 className="text-[20px] font-bold text-[#091D37] mt-6 mb-2">No books found</h3>
            <p className="text-center leading-[18px] text-[14px] font-normal text-[#091D37] font-sans">We couldn’t find any books matching your query. Try another query.</p>
        </div>
    );
};
