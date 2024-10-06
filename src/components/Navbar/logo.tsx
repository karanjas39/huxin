import { web_app_name } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Archivo_Black } from "next/font/google";

const fontArchivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });

const Logo = () => {
  return (
    <p
      className={cn(
        "font-bold md:text-3xl text-2xl text-main",
        fontArchivoBlack.className
      )}
    >
      {web_app_name}
    </p>
  );
};

export default Logo;
