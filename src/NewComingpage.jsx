

const NewComingpage = () => {

    useGSAP


    return (
        <div className="bg-[#F1C94B] min-h-screen w-full flex items-center justify-center px-4 relative">
            <div className="w-full max-w-[1200px] flex flex-col items-center justify-center gap-10 py-10">
                {/* Logo + Text */}
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        className="w-32 sm:w-40 md:w-48 lg:w-56"
                    />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#420C2C]">
                        COMING SOON
                    </h1>
                    <p className="font-roboto text-base sm:text-lg md:text-lg font-medium max-w-[500px]">
                        Experience the rich heritage of biryani, crafted with timeless passion
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <img src="/images/bxl-instagram-alt.svg" alt="Instagram" className="w-6 sm:w-8" />
                    <img src="/images/bxl-whatsapp.svg" alt="WhatsApp" className="w-6 sm:w-8" />
                    <img src="/images/facebook_Icons.svg" alt="Facebook" className="w-5 sm:w-7" />
                </div>
            </div>
        
            <img src="/images/Groupicon1.svg" alt=""  className="absolute top-0 left-0"/>
            <img src="/images/groupicon2.svg" alt="" className="absolute"/>
            <img src="/images/groupicon3.svg" alt="" className="absolute"/>
            <img src="/images/groupicon4.svg" alt="" className="absolute"/>

            

        </div>
    );
};

export default NewComingpage;
