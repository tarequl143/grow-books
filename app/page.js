import { Card } from "components";
import { AllBooks } from "./components/AllBooks";

export default function Home() {
  return (
    <div className="flex flex-col w-full space-y-5">
      <h1 className="text-[#091D37] text-2xl font-bold font-condensed leading-snug capitalize">Grow books</h1>
      <Card>
        <AllBooks />
      </Card>
    </div>
  );
}
