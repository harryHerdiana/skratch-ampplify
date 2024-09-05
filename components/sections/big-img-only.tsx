import classNames from "classnames";
import Image from "next/image";

const BigImageOnly = (props: BigImageOnlyProps) => {
  return (
    <div
      className={` relative w-full aspect-square md:aspect-video 
                   
                `}
    >
      <Image layout="fill" src={props.imgUrl} alt="" className={classNames(props.contain ? "object-contain" : "object-cover")} />
    </div>
  );
};

export default BigImageOnly;
