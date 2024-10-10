import { web_app_name } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Archivo_Black } from "next/font/google";
import Link from "next/link";

const fontArchivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });

const Logo = () => {
  return (
    <Link
      href="/"
      className={cn(
        "font-bold md:text-2xl text-xl text-main lowercase",
        fontArchivoBlack.className
      )}
    >
      {web_app_name}
    </Link>
  );
};

export default Logo;
