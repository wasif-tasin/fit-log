import BannerImage from '@/assets/banner.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <div
            className="mt-10 flex flex-col rounded-2xl bg-[#15171d] px-5 py-8 md:flex-row md:items-center md:justify-between lg:px-16 lg:py-12">
            <div className="order-last pt-2 pl-4 md:order-first lg:pt-8 lg:py-16">
                <p
                    className='text-[#c3f801] font-bold pb-3'>
                    WORKOUT LIBRARY
                </p>
                <p
                    className="font-(family-name:--font-oswald) text-4xl font-bold leading-none sm:text-5xl lg:text-[60px]">
                    TRAIN WITH INTENT. LOG <br />
                    EVERY SET.
                </p>
                <p
                    className='pb-8 text-[#9ca3af] pt-6'>
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                    into today&apos;s plan, and watch the week&apos;s work add up.
                </p>
                <button
                    className='bg-[#c3f801] py-3 px-6 text-black font-bold rounded-lg'>
                    BROWSE WORKOUTS
                </button>
            </div>
            <Image
                className="order-first mr-0 md:mr-10 lg:mr-10 xl:mr-20"
                width={360}
                height={334}
                src={BannerImage}
                alt='Banner Image'>
            </Image>
        </div>
    );
};

export default Banner;