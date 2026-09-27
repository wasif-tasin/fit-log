import Image from "next/image";
import type { IFitLog } from "@/Types/type";

interface IPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getFitLog = async () => {
    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log("Error Fetching Fit Logs", error);
        return [];
    }
};

const FitLogDetails = async ({ params }: IPageProps) => {
    const { id } = await params;
    const fitlogdata = await getFitLog();
    const fitlog = fitlogdata.find((fitlog: IFitLog) => fitlog.id === Number(id),) as IFitLog;

    return (
        <main className="w-full px-4 py-10 md:px-8 lg:px-12">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">

                <div className="w-full">
                    <div className="overflow-hidden rounded-2xl">
                        <Image
                            src={fitlog.image}
                            alt={fitlog.name}
                            width={900}
                            height={900}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-(family-name:--font-oswald) text-4xl font-bold uppercase md:text-5xl">
                        {fitlog.name}
                    </h1>
                    <p className="mt-3 text-sm leading-6 text-[#9ca3af] md:text-base">
                        {fitlog.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {fitlog.muscleGroups.map((muscle, ind) => (
                            <span
                                key={ind}
                                className="rounded-full bg-[#c3f801] px-4 py-1 text-xs font-bold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>
                    <div className="mt-6 overflow-hidden rounded-2xl border border-[#242832] bg-[#15171d]">

                        <div className="flex justify-between border-b border-[#242832] px-5 py-4">
                            <span className="text-xs font-bold text-[#8b929e]">
                                EQUIPMENT
                            </span>
                            <span className="text-sm">{fitlog.equipment}</span>
                        </div>

                        <div className="flex justify-between border-b border-[#242832] px-5 py-4">
                            <span className="text-xs font-bold text-[#8b929e]">
                                DIFFICULTY
                            </span>
                            <span className="text-sm">{fitlog.difficulty}</span>
                        </div>

                        <div className="flex justify-between border-b border-[#242832] px-5 py-4">
                            <span className="text-xs font-bold text-[#8b929e]">
                                SETS
                            </span>
                            <span className="text-sm">{fitlog.sets}</span>
                        </div>

                        <div className="flex justify-between border-b border-[#242832] px-5 py-4">
                            <span className="text-xs font-bold text-[#8b929e]">
                                REPS
                            </span>
                            <span className="text-sm">{fitlog.reps}</span>
                        </div>

                        <div className="flex justify-between border-b border-[#242832] px-5 py-4">
                            <span className="text-xs font-bold text-[#8b929e]">
                                DURATION
                            </span>
                            <span className="text-sm">{fitlog.duration} min</span>
                        </div>

                        <div className="flex justify-between border-b border-[#242832] px-5 py-4">
                            <span className="text-xs font-bold text-[#8b929e]">
                                CALORIES
                            </span>
                            <span className="text-sm">
                                {fitlog.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex justify-between px-5 py-4">
                            <span className="text-xs font-bold text-[#8b929e]">
                                RATING
                            </span>
                            <span className="text-sm">{fitlog.rating}</span>
                        </div>

                    </div>
                    <div className="mt-7">
                        <h2 className="font-(family-name:--font-oswald) text-xl font-bold">
                            INSTRUCTIONS
                        </h2>

                        <div className="mt-4 space-y-4">
                            {
                                fitlog.instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-sm leading-6 text-[#9ca3af]">
                                        <span
                                            className="font-bold text-[#c3f801]">
                                            {index + 1}.
                                        </span>
                                        <span>{instruction}</span>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <button className="rounded-lg bg-[#c3f801] px-5 py-3 text-sm font-bold text-black">
                            Add to today&apos;s plan
                        </button>

                        <button className="rounded-lg border border-[#343943] px-5 py-3 text-sm font-medium">
                            Save for later
                        </button>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default FitLogDetails;