import { Logo } from "../brand";
import { MyAccount, OtherTools } from "./components";

export const Header = () => {

    return (
        <div className="flex w-full justify-between items-center px-7 py-4 bg-white shadow-header">
            <Logo />
            <div className="inline-flex space-x-6">
                <OtherTools />
                <MyAccount />
            </div>
        </div>
    )
}