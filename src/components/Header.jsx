import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header>
      {/* <div className="fixed flex justify-between items-center pt-16 pl-14 pr-14 pb-16 w-full">
        <div className="logo flex flex-row items-center gap-3 fixed top-16 left-24">
          <img src="./logo.png" alt="logo" className="w-8 h-8 rounded-sm" />
          <h1 className="h1">reFilc</h1>
        </div>
        <Button className="bg-[#FBFCFF] right-24 top-20 fixed w-fit  border border-[#CEDBF5] ">
          Letöltés
        </Button>
      </div> */}
      <div className="fixed w-full z-20 top-0 start-0">
        <div className="navbar flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex flex-row items-center gap-3">
            <img src="./logo.png" alt="reFilc" className="h-8" />
            <h1 className="h1">reFilc</h1>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button
              type="button"
              className="bg-[#FBFCFF] px-4 py-2 text-center "
            >
              Letöltés
            </Button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-16 left-24 text-primary-foreground font-figtree hidden xl:block">
        <p>Website design made by xou</p>
        <p>Copyright © 2023, All Rights Reserved</p>
        <Link href="" className="">
          Adatkezelési Tájékoztató
        </Link>
      </div>
    </header>
  );
};

export default Header;
