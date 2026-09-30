import type { IFitLog } from "@/Types/type";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IFitLogsProps {
    fitlog: IFitLog;
}

const MyPlanCard = ({ fitlog }: IFitLogsProps) => {
    return (
        <div className="card md:card-side w-full bg-[#15171d] shadow-sm p-3 rounded-xl">
            <div className=" flex justify-start gap-4">
                <Image
                    src={fitlog.image}
                    alt={fitlog.name}
                    height={10}
                    width={144}
                    className="h-22 object-cover rounded-[10px]"
                ></Image>
                <div className="flex flex-1 justify-between md:flex-none md:block">
                    <div className="min-w-0 flex-1">
                        <span className="font-(family-name:--font-oswald) text-xl font-bold">
                            {fitlog.name}
                        </span>

                        <div className="text-[#9ca3af] text-[15px]">{fitlog.equipment}</div>
                    </div>
                    <div className="flex justify-start flex-col md:flex-row gap-5 text-[16px] text-[#9ca3af] pt-2">
                        <div className="flex gap-2 ">
                            <Clock className="text-[#c3f801]"></Clock>
                            <span>{fitlog.duration} min</span>
                        </div>
                        <div className="flex gap-2">
                            <Flame className="text-[#c3f801]"></Flame>
                            <span>{fitlog.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex gap-2">
                            <Star className="text-[#c3f801]"></Star>
                            <span>{fitlog.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col md:flex-col lg:flex-row gap-3 md:gap-4 pt-4 md:pt-0 md:pr-5 lg:pr-12 md:items-end lg:items-center md:justify-end  ">
                <Link href={`/fit-logs/${fitlog.id}`} className="w-full md:w-auto">
                    <button className="button-shrink rounded-xl md:rounded-3xl border border-[#343943] px-6.25 py-3 md:py-2 text-sm font-medium cursor-pointer w-full md:w-auto">
                        View Details
                    </button>
                </Link>

                <button className="button-shrink rounded-xl md:rounded-3xl bg-[#c3f801] px-5 py-3 md:py-2 text-sm font-bold text-black cursor-pointer md:w-auto">
                    Mark as Done
                </button>
            </div>
        </div>
    );
};

export default MyPlanCard;
