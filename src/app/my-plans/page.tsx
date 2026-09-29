"use client";
import { FitLogsContext } from '@/context/FitLogsContext';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const context = useContext(FitLogsContext);

    if (!context) {
        throw new Error("MyPlans must be used inside FitLogsProvider");
    }

    const { todayPlan, saveForLater } = context;
    const exercises = todayPlan.length;
    const minutes = todayPlan.reduce((totalMinutes, fitlog) => totalMinutes + fitlog.duration, 0);
    const calories = todayPlan.reduce((totalCalories, fitlog) => totalCalories + fitlog.caloriesBurned, 0);

    return (
        <div className='container mx-auto'>
            <div className='pt-5'>
                <span className='text-3xl font-bold font-(family-name:--font-oswald)'>MY PLAN</span>
                <br />
                <p className='text-[#9ca3af] pb-5'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='bg-[#15171d] rounded-lg flex py-7'>
                <div className=' flex-1 pl-6'>
                    <p className='text-[#9ca3af] text-[13px]'>Exercises</p>
                    <p className=' text-[#c3f801] text-4xl font-bold font-(family-name:--font-oswald)'>{exercises}</p>
                </div>
                <div className=' flex-1'>
                    <p className='text-[#9ca3af] text-[13px]'>Minutes</p>
                    <p className='text-4xl font-bold font-(family-name:--font-oswald)'>{minutes}</p>
                </div>
                <div className='flex-1'>
                    <p className='text-[#9ca3af] text-[13px]'>Calories</p>
                    <p className='text-4xl font-bold font-(family-name:--font-oswald)'>{calories}</p>
                </div>
            </div>
            <div className="tabs tabs-box mt-6 w-50 bg-[#15171d] rounded-xl">
                <input type="radio" name="my_tabs_1" className="tab w-30 rounded-xl checked:font-bold" aria-label="Today's Plan" />
                <input type="radio" name="my_tabs_1" className="tab w-10 rounded-xl checked:font-bold" aria-label="Saved" defaultChecked />
            </div>
        </div>
    );
};

export default MyPlanPage;