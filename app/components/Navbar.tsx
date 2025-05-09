import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 sticky top-0 bg-white z-50 shadow-md px-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" className="size-10" />
        <h3 className="text-3xl font-semibold">
          Get<span className="text-blue-500">Invoice</span>
        </h3>
      </Link>
      <Link href="/login">
        <RainbowButton>Get Started</RainbowButton>
      </Link>
    </div>
  );
}
