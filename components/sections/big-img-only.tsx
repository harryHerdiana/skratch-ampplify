import classNames from "classnames";
import Image from "next/image";

const BigImageOnly = (props: BigImageOnlyProps) => {
    return (
        <div
            className={classNames(
                ` relative w-full 
                `,
                props.className, props.className?.includes("aspect") ?? "aspect-square md:aspect-video "
            )}
        >
            <Image
                layout="fill"
                src={props.imgUrl}
                alt=""
                className={classNames(
                    props.contain ? "object-contain" : "object-cover",
                    props.imageClassname
                )}
            />
        </div>
    );
};

export default BigImageOnly;
