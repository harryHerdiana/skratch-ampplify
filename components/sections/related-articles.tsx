import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
    imageSrc: string;
    imageAlt?: string;
    title: string;
    date: string;
}

const ArticleCard = ({
    imageSrc,
    imageAlt = "article",
    title,
    date,
}: ArticleCardProps) => {
    return (
        <Link href="/">
            <div className="h-full flex flex-col items-center max-w-[335px] ">
                <div className="relative h-full w-full  min-h-[335px] ">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover rounded-[4px] "
                    />
                </div>
                <div className="mt-5 w-full">
                    <h4 className=" text-18 mb-5 leading-[24px] font-[MonumentGrotesk-Regular]">
                        {title}
                    </h4>
                    <p className="text-12 leading-[16px] font-[MonumentGrotesk-Semi-Mono] uppercase text-dark text-opacity-40">
                        {date}
                    </p>
                </div>
            </div>
        </Link>
    );
};

const RelatedArticles = () => {
    return (
        <div className="hidden lg:block h-full mb-[120px]">
            <h4 className="lg:mt-5 text-24">Related Articles</h4>
            <div className="grid grid-cols-4 gap-5">
                <ArticleCard
                    imageSrc="/img/products/blueprintproduct.png"
                    title="When a shower just won't cut it: how to be the most creative person in the room"
                    date="24 Aug, 2024"
                />
                <ArticleCard
                    imageSrc="/img/products/evvyproduct.png"
                    title="How to convert your internal tool into a profitable SaaS app"
                    date="24 Aug, 2024"
                />
                <ArticleCard
                    imageSrc="/img/products/blueprintproduct.png"
                    title="Ecommerce"
                    date="24 Aug, 2024"
                />
                <ArticleCard
                    imageSrc="/img/products/blueprintproduct.png"
                    title="Ecommerce"
                    date="24 Aug, 2024"
                />
            </div>
        </div>
    );
};

export default RelatedArticles;
