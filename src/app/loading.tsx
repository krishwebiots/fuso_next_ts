"use client";
import { Fragment } from "react/jsx-runtime";
import Image from "next/image";
import { GifPath } from "@/Constants/Constants";
import { Loaders } from "@/Data/Layout/Loader";
import { PathTypes } from "@/Types/LayoutType";
import { usePathname } from "next/navigation";

const Loading: React.FC<PathTypes> = () => {
  const pathname = usePathname();
  const symbolRegex = /[!@#\$%\^\*\(\)_\+\{\}\[\]:;"'<>,.?/\\|`~=]/g;
  const [firstPartRaw] = pathname.split("/").slice(1);
  const firstPart = firstPartRaw.replace(symbolRegex, "").toLowerCase();

  const loaderKey = Object.keys(Loaders).find((key) => key.toLowerCase() === firstPart.toLowerCase());

  const loaderContent = Loaders[loaderKey || ""]?.svg || (
    <Fragment>
      <Image src={`${GifPath}/${Loaders[loaderKey || ""]?.src || "car1-loader.gif"}`} height={Loaders[loaderKey || ""]?.height || 47} width={Loaders[loaderKey || ""]?.width || 150} alt='loader' className='img-fluid' />
      <h4>{Loaders[loaderKey || ""]?.text || "Loading Car rental Template. Please wait…"}</h4>
    </Fragment>
  );

  return (
    <Fragment>
      <div className='loader-wrapper'>
        <div className={`${firstPart.includes("property") ? "property-loader" : `text-center ${firstPart.includes("job") ? "job-loader" : "car-loader"}`}`}>{loaderContent}</div>
      </div>
    </Fragment>
  );
};

export default Loading;
