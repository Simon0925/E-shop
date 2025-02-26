import Link from "next/link";

interface ButtonProps {
  name: string;
  link: string;
}

const Button = ({ name, link }: ButtonProps) => {
  return (
    <Link href={link} passHref>
      <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:scale-105 transition-all duration-300 ease-in-out">
        {name}
      </button>
    </Link>
  );
};

export default Button;
