import { FitLogsContext } from "@/context/FitLogsContext";
import type { IFitLog } from "@/Types/type";
import { Clock, Flame, Star, Trash, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "sonner";

interface IFitLogsProps {
    fitlog: IFitLog;
    type: "today" | "saved";
}

const MyPlanCard = ({ fitlog, type }: IFitLogsProps) => {
    const context = useContext(FitLogsContext);
    if (!context) {
        throw new Error("MyPlanCard must be used inside FitLogsProvider");
    }
    const { setTodayPlan, setSaveForLater } = context;

    const handleMarkAsDone = () => {
        if (type === "today") {
            setTodayPlan((todayPlan) =>
                todayPlan.filter((item) => item.id !== fitlog.id),
            );
        } else {
            setSaveForLater((saveForLater) =>
                saveForLater.filter((item) => item.id !== fitlog.id),
            );
        }
        toast.success("Exercise marked as done");
    };
    const handleRemove = () => {
        if (type === "today") {
            setTodayPlan((todayPlan) =>
                todayPlan.filter((item) => item.id !== fitlog.id),
            );
        } else {
            setSaveForLater((saveForLater) =>
                saveForLater.filter((item) => item.id !== fitlog.id),
            );
        }
        toast("Exercise removed from your plan", {
            icon: <Trash className="h-4 w-4 text-red-500" />,
        });
    };

    return (
        <div className="card md:card-side w-full bg-[#15171d] shadow-sm pl-3 py-3 rounded-xl">
            <div className=" flex justify-start gap-4">
                <Image
                    src={fitlog.image}
                    alt={fitlog.name}
                    height={10}
                    width={144}
                    className="h-22 object-cover rounded-[10px]"
                ></Image>
                <div>
                    <div className="min-w-0 flex-1">
                        <span className="font-(family-name:--font-oswald) text-base font-bold md:text-xl">
                            {fitlog.name}
                        </span>

                        <div className="text-[11px] text-[#9ca3af] md:text-[15px]">
                            {fitlog.equipment}
                        </div>

                        <div className="flex flex-row justify-between gap-2 pt-2 text-xs text-[#9ca3af] md:gap-5  sm:text-[16px]">
                            <div className="flex gap-1 sm:gap-2">
                                <Clock className="h-4 w-4 text-[#c3f801] sm:h-6 sm:w-6" />
                                <span>{fitlog.duration} min</span>
                            </div>

                            <div className="flex gap-1 sm:gap-2">
                                <Flame className="h-4 w-4 text-[#c3f801] sm:h-6 sm:w-6" />
                                <span>{fitlog.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex gap-1 sm:gap-2">
                                <Star className="h-4 w-4 text-[#c3f801] sm:h-6 sm:w-6" />
                                <span>{fitlog.rating}</span>
                            </div>
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

                {type === "today" && (
                    <button
                        onClick={handleMarkAsDone}
                        className="button-shrink rounded-xl md:rounded-3xl bg-[#c3f801] px-5 py-3 md:py-2 text-sm font-bold text-black cursor-pointer md:w-auto"
                    >
                        Mark as Done
                    </button>
                )}
                <button
                    type="button"
                    onClick={handleRemove}
                    className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-xl  text-[#9ca3af] cursor-pointer hover:text-white md:hidden"
                >
                    <X size={18} />
                </button>
                <button
                    type="button"
                    onClick={handleRemove}
                    className=" button-shrink hidden items-center justify-center rounded-3xl bg-red-500 py-2 px-13.75  text-white cursor-pointer md:flex lg:hidden"
                >
                    <Trash size={20} />
                </button>
                <button
                    type="button"
                    onClick={handleRemove}
                    className="hidden text-[#9ca3af] cursor-pointer lg:block"
                >
                    <Trash className="text-red-500 button-shrink" size={20} />
                </button>
            </div>
        </div>
    );
};

export default MyPlanCard;
