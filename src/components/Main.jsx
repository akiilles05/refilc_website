import Image from "next/image";
import { FaWifi, FaSignal } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";

const Main = () => {
  return (
    <div className="flex justify-center items-center pt-40 ">
      <div className="app border-2  border-[#d1dcf1] bg-[#dde7f7] rounded-[30px] flex flex-col justify-center items-center ">
        <div className="flex flex-row justify-between items-center w-[390px] m-5 pb-2">
          <p className="font-bold">9:41</p>
          <div className="flex flex-row gap-2">
            <FaSignal fontSize="1em" />
            <FaWifi fontSize="1em" />
            <IoIosBatteryFull fontSize="1.25em" />
          </div>
        </div>
        <div className="flex flex-row  justify-between items-center m-5 gap-28">
          <h1 className="font-bold text-2xl">Jó reggelt, Látogató!</h1>
          <Image
            src="/logo.png"
            alt="logo"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
