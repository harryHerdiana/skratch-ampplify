const ProfileSection = () => {
    return (
        <div className="bg-dark pt-[60px] lg:pt-[120px] px-2.5 md:px-5 pb-4 rounded-[20px] text-12 text-white leading-[16px]">
            <h3 className="uppercase text-52 md:text-120  max-w-[85%] lg:max-w-[1163px] font-['MonumentGrotesk-Bold'] tracking-[-2px]">
                Services
            </h3>
            <p className="mt-[100px] mb-2.5 md:translate-y-10 text-12 lg:text-15">( What we do )</p>
            <div className="flex border-t-[1px] border-t-[#FFFFFF26] pt-2.5 pb-[114px] md:grid grid-cols-2">
                <div className="hidden md:block"></div>
                <div className="flex w-full lg:max-w-[62%]">
                    <div className="flex gap-5 w-full text-15 lg:text-18">
                        <p>1</p>
                        <p>Ecommerce</p>
                    </div>
                    <div className="w-full uppercase text-[#FFFFFF66] font-['MonumentGrotesk-Semi-Mono']">
                        <p>Store migration</p>
                        <p>Custom storefront</p>
                        <p>Store setup</p>
                        <p>App integration</p>
                        <p>API implementation</p>
                        <p>Optimization</p>
                    </div>
                </div>
            </div>
            <div className="flex border-t-[1px] border-t-[#FFFFFF26] pt-2.5 pb-[114px] md:grid grid-cols-2">
                <div className="hidden md:block"></div>
                <div className="flex w-full lg:max-w-[62%]">
                    <div className="flex gap-5 w-full text-15 lg:text-18">
                        <p>2</p>
                        <p>Modern Web</p>
                    </div>
                    <div className="w-full uppercase text-[#FFFFFF66] font-['MonumentGrotesk-Semi-Mono']">
                        <p>Rapid Product</p>
                        <p>Prototyping</p>
                        <p>Information Architecture </p>
                        <p>User Interface</p>
                        <p>Graphic Design</p>
                        <p>Brand Identity</p>
                        <p>Content Creation</p>
                        <p>Motion Design</p>
                    </div>
                </div>
            </div>
            <div className="flex border-t-[1px] border-t-[#FFFFFF26] pt-2.5 pb-[114px] md:grid grid-cols-2">
                <div className="hidden md:block"></div>
                <div className="flex w-full lg:max-w-[62%]">
                    <div className="flex gap-5 w-full text-15 lg:text-18">
                        <p>3</p>
                        <p>Lo-No Code</p>
                    </div>
                    <div className="w-full uppercase text-[#FFFFFF66] font-['MonumentGrotesk-Semi-Mono']">
                        <p>Webflow</p>
                        <p>Shopify Development</p>
                        <p>Web-App Development </p>
                        <p>Usability Testing</p>
                    </div>
                </div>
            </div>
            <div className="flex border-t-[1px] border-t-[#FFFFFF26] pt-2.5 pb-[114px] md:grid grid-cols-2">
                <div className="hidden md:block"></div>
                <div className="flex w-full lg:max-w-[62%]">
                    <div className="flex gap-5 w-full text-15 lg:text-18">
                        <p>4</p>
                        <p>Support</p>
                    </div>
                    <div className="w-full uppercase text-[#FFFFFF66] font-['MonumentGrotesk-Semi-Mono']">
                        <p>Ecommerce Management</p>
                        <p>Email Campaign Management</p>
                        <p>Product Image Capture</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
