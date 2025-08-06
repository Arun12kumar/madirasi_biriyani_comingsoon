import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const NewComingpage = () => {
    useGSAP(() => {
        gsap.fromTo(
            "#group-icon2",
            {
                x: -43,
                y: -43,
                rotate: 0,
            },
            {
                x: -150,
                y: 150,
                rotate: 360,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            }
        );
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            "#group-icon1",
            {
                x: -60,
                y: -60,
                rotate: 0,
            },
            {
                x: 150,
                y: 150,
                rotate: 360,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            }
        );
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            "#group-icon4",
            {
                x: 0,
                y: -43,
                rotate: 0,
            },
            {
                x: 150,
                y: -80,
                rotate: 360,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            }
        );
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            "#group-icon3",
            {
                x: -40,
                y: -40,
                rotate: 0,
            },
            {
                x: -150,
                y: -80,
                rotate: 360,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            }
        );
    }, []);
    useGSAP(() => {
        gsap.fromTo(
            "#group-icon5",
            {
                x: 20,
                y: 20,
                rotate: 0,
            },
            {
                x: 150,
                y: 80,
                rotate: 360,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            }
        );
    }, []);

    useGSAP(() => {
        gsap.to("#text1", {
            opacity: 1,
            y: -10,
            ease: "sine.inOut",
            duration: 2,
            yoyo: true,
        });
    }, []);

    useGSAP(() => {
        const split = new SplitText("#text2", {
            type: "chars,words,lines",
        });

        gsap.from(split.words, {
            y: 100,
            autoAlpha: 0,
            stagger: 0.05,
        });
    }, []);

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
                    <h1
                        id="text1"
                        className="opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#420C2C]"
                    >
                        COMING SOON
                    </h1>
                    <p
                        id="text2"
                        className="font-roboto text-base sm:text-lg md:text-lg font-medium max-w-[500px]"
                    >
                        Experience the rich heritage of biryani, crafted with timeless
                        passion
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <img
                        src="/images/bxl-instagram-alt.svg"
                        alt="Instagram"
                        className="w-6 sm:w-8"
                    />
                    <img
                        src="/images/bxl-whatsapp.svg"
                        alt="WhatsApp"
                        className="w-6 sm:w-8"
                    />
                    <img
                        src="/images/facebook_Icons.svg"
                        alt="Facebook"
                        className="w-5 sm:w-7"
                    />
                </div>
            </div>

            <img
                src="/images/groupicon1.svg"
                alt=""
                id="group-icon1"
                className="absolute w-8 md:w-20 top-0 left-0 opacity-70"
            />
            <img
                src="/images/groupicon1.svg"
                alt=""
                id="group-icon5"
                className="absolute w-7 md:w-17 top-0 left-[50%] opacity-70"
            />
            <img
                src="/images/groupicon2.svg"
                alt=""
                id="group-icon2"
                className="absolute top-0 right-0 w-10 md:w-26"
            />
            <img
                src="/images/groupicon2.svg"
                alt=""
                id="group-icon4"
                className="absolute bottom-0 left-0 w-12 md:w-26"
            />
            <img
                src="/images/groupicon3.svg"
                alt=""
                id="group-icon3"
                className="absolute bottom-0 right-0 w-6 md:w-26"
            />
            <img
                src="/images/groupicon3.svg"
                alt=""
                id="group-icon3"
                className="absolute top-0 left-[20%] w-14 md:w-28"
            />
        </div>
    );
};

export default NewComingpage;
