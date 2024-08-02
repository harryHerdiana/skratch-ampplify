import Image from "next/image";

const BigImageOnly = (props: BigImageOnlyProps) => {
    return (
        <>
            <div id='wrap-image' className={`
                w-full max-w-full max-h-full
                relative overflow-hidden
                flex items-center justify-center`}>
                <div className={` relative w-full h-0
                    ${'pb-[67.25%]'} // Default to 16:9 aspect ratio
                `}>
                    <Image
                        layout="fill"
                        src={props.imgUrl}
                        alt=""
                        className="object-contain"
                    />
                </div>
            </div>
        </>
    );
}

export default BigImageOnly;