import Link from "next/link";

const NewHeader = () => {
    return (
        <header className="font-monument fixed top-0 w-full text-15 md:text-18 px-2.5 md:px-5 py-4 flex mix-blend-difference text-white justify-between z-50 ">
            <Link href="/" className=" mix">
                Skratch®
            </Link>
            <div className="flex gap-5 md:gap-8">
                <Link href="/projects">Projects²⁴</Link>
                <Link href="/">Get in Touch</Link>
            </div>
        </header>
    );
};
export default NewHeader;