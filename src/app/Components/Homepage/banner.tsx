import BannerImage from '@/assets/banner.png'
import Image from 'next/image';

const banner = () => {
    return (
        <div className='flex justify-between mt-10 bg-[#15171d] pt-16 pb-20 rounded-2xl'>
            <div className=' pt-8 pl-16'>
                <p className='text-[#c3f801] font-bold pb-3'>WORKOUT LIBRARY</p>
                <p className=' text-[60px] font-bold leading-none font-(family-name:--font-oswald)'>TRAIN WITH INTENT. LOG <br />
                    EVERY SET.</p>
                <p className='pb-8 text-[#9ca3afFF] pt-6'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                    into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    <button className='bg-[#c3f801] py-3 px-6 text-black font-bold rounded-lg'>BROWSE WORKOUTS</button>
            </div>
            <Image className='mr-20' width={360} height={334} src={BannerImage} alt='Banner Image'></Image>
        </div>
    );
};

export default banner;