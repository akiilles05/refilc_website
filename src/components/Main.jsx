import Image from "next/image";
import { FaWifi, FaSignal } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";

const Main = () => {
  return (
    <div className="flex justify-center items-center pt-40 ">
      <div className="image_carousel">
        <Image
          src="/mockup/mockup1.svg"
          width={900}
          height={600}
          alt="mockup"
        />
      </div>
    </div>
  );
};

export default Main;
