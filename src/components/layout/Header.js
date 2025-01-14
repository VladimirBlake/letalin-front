import PhoneIcon from "@/images/phone.svg";
import Logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="hidden lg:block lg:fixed lg:top-0 lg:z-50 h-24 bg-white w-full">
      <div className="flex justify-between container mx-auto items-center h-full px-4 xl:px-0">
        <Link href="/">
          <Image src={Logo} alt="" className="w-[45px] h-auto" />
        </Link>
        <nav className="font-darco list-none flex gap-x-9 relative left-12 xl:left-16">
          <li className="hover:text-green transition-all">
            <Link href="/">Главная</Link>
          </li>
          <li className="hover:text-green transition-all">
            <Link href="/projects">Проекты</Link>
          </li>
          <li className="hover:text-green transition-all">
            <Link href="/services">Услуги</Link>
          </li>
          <li className="hover:text-green transition-all">
            <Link href="/about">О нас</Link>
          </li>
        </nav>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center">
            <Link href="tel:+74951056676">
              <div className="cursor-pointer">
                <Image src={PhoneIcon} alt="" className="w-6 h-6" />
              </div>
            </Link>
          </div>
          <span className="ml-3">8 (495)-105-66-76</span>
        </div>
      </div>
    </div>
  );
}
