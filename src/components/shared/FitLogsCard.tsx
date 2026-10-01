import type { IFitLog } from "@/types/type";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IFitLogDataProps {
    fitlog: IFitLog;
}

const FitLogsCard = ({ fitlog }: IFitLogDataProps) => {
    return (
        <Link href={`/fit-logs/${fitlog.id}`}>
            <div className="card w-full shadow:sm overflow-hidden min-w-0 shadow-sm  bg-[#15171d]">
                <figure className="w-full">
                    <Image
                        src={fitlog.image}
                        alt={fitlog.name}
                        height={190}
                        width={400}
                        className="h-65 w-full object-cover"
                    ></Image>
                </figure>
                <div className="card-body">
                    <div className=" flex flex-wrap gap-2">
                        {fitlog.muscleGroups.map((muscle, ind) => (
                            <span
                                key={ind}
                                className="rounded-full bg-[#c3f801] px-4 py-1 text-[15px] font-bold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <span className="font-(family-name:--font-oswald) text-2xl md:text-3xl font-bold">
                        {fitlog.name}
                    </span>

                    <div className="text-[#9ca3af] text-[12px] md:text-[15px]">
                        {fitlog.equipment}
                    </div>
                    <div className="flex justify-start flex-wrap gap-5 text-[16px] text-[#9ca3af]">
                        <div className="flex gap-2">
                            <Clock></Clock>
                            <span>{fitlog.duration} min</span>
                        </div>
                        <div className="flex gap-2">
                            <Flame></Flame>
                            <span>{fitlog.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex gap-2">
                            <Star></Star>
                            <span>{fitlog.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FitLogsCard;
