import Link from "next/link";
import { RemoveScroll } from "react-remove-scroll";

export default function MobileMenu({ isMenuOpen }) {
  return (
    <RemoveScroll enabled={isMenuOpen}>
      {isMenuOpen && (
        <div className="w-full h-full bg-white z-40 fixed top-0 pl-16 pt-24">
          <nav className="s list-none font-darco font-bold text-xl flex flex-col gap-y-4">
            <li>
              <Link href="">Главная</Link>
            </li>
            <li>
              <Link href="">Проекты</Link>
            </li>
            <li>
              <Link href="">О нас</Link>
            </li>
          </nav>
        </div>
      )}
    </RemoveScroll>
  );
}
