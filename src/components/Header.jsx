import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header>
      <div className="fixed flex justify-between items-center pt-16 pl-14 pr-14 pb-16 w-full">
        <div className="logo flex flex-row items-center gap-3 fixed top-16 left-24">
          <img src="./logo.png" alt="logo" className="w-8 h-8 rounded-sm" />
          <h1 className="h1">reFilc</h1>
        </div>
        <Button className="bg-white right-24 top-16 fixed">Letöltés</Button>
      </div>
      <div className="fixed bottom-16 left-24 text-primary-foreground">
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
