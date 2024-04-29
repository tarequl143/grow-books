export const Card = ({children}) => {

    return (
        <div className="flex flex-col w-full p-4 md:p-6 bg-white rounded-lg">
            {children}
        </div>
    );
};
