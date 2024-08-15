import Image from "next/image";

const BigImageOnly = (props: BigImageOnlyProps) => {
    return (
       
           
                <div className={` relative w-full aspect-video
                   
                `}>
                    <Image
                        layout="fill"
                        src={props.imgUrl}
                        alt=""
                        className="object-cover"
                    />
                </div>
          
      
    );
}

export default BigImageOnly;