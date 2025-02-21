import Link from "next/link";
import { navLinks } from "../../constants/navLinks";
import { Rowdies } from "next/font/google";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

const Navigation = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex text-xl xl:text-lg gap-4">
        {navLinks.map((item, index) => (
          <li key={index} className="group">
            <Link
              href={item.href}
              className={`transition-colors duration-300 text-black  group-hover:text-red-600 ${rowdies.className}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
