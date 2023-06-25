import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const session = null
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gp-10">
        <Link href={"/"}>
          <Image src="/logo.svg" width={115} height={43} alt="Flexible" />
        </Link>

        <ul className="xl:flex hidden text-sm gap-7 ">
          {NavLinks.map((link, i) => (
            <Link href={link.href} key={link.key}>
                {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
            {session ? (
                // UserPhoto
                <Link href={'/create-project'}>
                Share Work
                </Link>
            ):  (
                <AuthProviders />
            )}
      </div>
    </nav>
  );
};

export default Navbar;
