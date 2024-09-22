import Link from "next/link";
import { BlogItem } from "../sections/blog-components";

export default function BlogPageComponent() {
    return (
        <div className="bg-[#FDFCF3] rounded-[20px] px-[9px] lg:px-[19px]">
            <h1 className="text-52 uppercase font-bold  font-[MonumentGrotesk-Bold] pt-[93px] mb-[60px]">
                Blog
            </h1>
            <div className="flex gap-x-4 flex-wrap  mb-4 lg:gap-x-[30px] ">
                <Link href="/blog/1" className="underline">
                    <span>
                        All Articles<sup>24</sup>
                    </span>
                </Link>
                <Link href="/blog/1" className="">
                    <span>
                        Press<sup>24</sup>
                    </span>
                </Link>
                <Link href="/blog/1" className="">
                    <span>
                        Project Updates<sup>24</sup>
                    </span>
                </Link>
                <Link href="/blog/1" className="">
                    <span>
                        Studio Insights<sup>24</sup>
                    </span>
                </Link>
            </div>
            <div>
                <BlogItem
                    title={
                        "When a shower just won't cut it: how to be the most creative person in the room"
                    }
                    date={"24 AUG, 2024"}
                    imgUrl={"/img/products/aftcoproduct.png"}
                    categories={[{ slug: "press", title: "Press" }]}
                />
            </div>
        </div>
    );
}
