"use client";
import MyPlanCard from "@/components/shared/MyPlanCard";
import { FitLogsContext } from "@/context/FitLogsContext";
import type { IFitLog } from "@/Types/type";
import Link from "next/link";
import React, { useContext, useState } from "react";


const MyPlanPage = () => {
  const context = useContext(FitLogsContext);

  if (!context) {
    throw new Error("MyPlans must be used inside FitLogsProvider");
  }

  const { todayPlan, saveForLater } = context;

  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );

  const sortFitLog = (fitlog: IFitLog[]) => {
    const sortedFitLog = [...fitlog];

    if (sortBy === "Duration") {
      sortedFitLog.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "Calories") {
      sortedFitLog.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "Rating") {
      sortedFitLog.sort((a, b) => b.rating - a.rating);
    }
    return sortedFitLog;
  };

  const sortedTodayPlan = sortFitLog(todayPlan);
  const sortedSaveForLater = sortFitLog(saveForLater);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const currentPlanTab = activeTab === "today" ? todayPlan : saveForLater;
  console.log(
    currentPlanTab.map((fitlog) => ({
      name: fitlog.name,
      calories: fitlog.caloriesBurned,
    })),
  );

  const exercises = currentPlanTab.length;

  const minutes = currentPlanTab.reduce(
    (totalMinutes, fitlog) => totalMinutes + fitlog.duration,
    0,
  );

  const calories = currentPlanTab.reduce(
    (totalCalories, fitlog) => totalCalories + fitlog.caloriesBurned,
    0,
  );

  return (
    <div>
      <div className="pt-5">
        <span className="text-3xl font-bold font-(family-name:--font-oswald)">
          MY PLAN
        </span>
        <br />
        <p className="text-[#9ca3af] pb-5">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="bg-[#15171d] rounded-xl flex flex-col  md:flex md:flex-row  py-7">
        <div className=" flex-1 pl-6">
          <p className="text-[#9ca3af] text-[13px]">Exercises</p>
          <p className=" text-[#c3f801] text-4xl font-bold font-(family-name:--font-oswald) pb-2">
            {exercises}
          </p>
        </div>
        <div className="mx-6 h-px bg-gray-600 md:hidden"></div>
        <div className=" flex-1 p-6 md:p-0">
          <p className="text-[#9ca3af] text-[13px]">Minutes</p>
          <p className="text-4xl font-bold font-(family-name:--font-oswald)">
            {minutes}
          </p>
        </div>
        <div className="mx-6 h-px bg-gray-600 md:hidden"></div>
        <div className="flex-1 p-6 md:p-0">
          <p className="text-[#9ca3af] text-[13px]">Calories</p>
          <p className="text-4xl font-bold font-(family-name:--font-oswald)">
            {calories}
          </p>
        </div>
      </div>
      <div className="mt-6 w-full">
        {/* Tabs */}
        <div className="flex justify-between">
          <div className="flex w-fit rounded-xl bg-[#15171d] py-2 px-2">
            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`rounded-xl px-5 py-2 text-sm ${activeTab === "today"
                ? "bg-[#242832] font-bold text-white"
                : "text-[#9ca3af]"
                }`}
            >
              Today&apos;s Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-xl px-5 py-2 text-sm ${activeTab === "saved"
                ? "bg-[#242832] font-bold text-white"
                : "text-[#9ca3af]"
                }`}
            >
              Saved
            </button>
          </div>
          <div className="relative w-fit rounded-2xl">
            <select
              defaultValue="Duration"
              className=" cursor-pointer  w-30 rounded-xl border border-[#0c0d0f] bg-[#15171d] px-5 py-5 pr-11 text-sm text-white outline-none transition hover:border-[#4a4f5a] focus:border-[#c3f801] focus:font-bold select"
              onChange={(e) =>
                setSortBy(
                  e.target.value as "Duration" | "Calories" | "Rating",
                )
              }
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Content */}
        <div className="mt-4 w-full">
          {activeTab === "today" ? (
            todayPlan.length > 0 ? (
              <div className="space-y-4">
                {sortedTodayPlan.map((fitlog) => (
                  <MyPlanCard key={fitlog.id} fitlog={fitlog} type="today" />
                ))}
              </div>
            ) : (
              <div>
                <div className="bg-[#11131780] py-50 text-center border-dashed  border-[1.5px] border-[#ffffff1A] rounded-xl">
                  <h2 className=" text-2xl font-bold font-(family-name:--font-oswald)">
                    NOTHING HERE YET
                  </h2>
                  <p className="text-[#9ca3af] pb-6 px-6 md:px-0">
                    Browse the library and add a lift to get today moving.
                  </p>
                  <Link href={"/"}>
                    <button className="rounded-3xl bg-[#c3f801] px-5 py-2.5 text-[15px] font-bold text-black cursor-pointer">
                      Go to workouts
                    </button>
                  </Link>
                </div>
              </div>
            )
          ) : saveForLater.length > 0 ? (
            <div className="space-y-4">
              {sortedSaveForLater.map((fitlog) => (
                <MyPlanCard key={fitlog.id} fitlog={fitlog} type="saved" />
              ))}
            </div>
          ) : (
            <div>
              <div className="bg-[#11131780] py-50 text-center border-dashed  border-[1.5px] border-[#ffffff1A] rounded-2xl">
                <h2 className=" text-2xl font-bold font-(family-name:--font-oswald)">
                  NOTHING HERE YET
                </h2>
                <p className="text-[#9ca3af] pb-6">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link href={"/"}>
                  <button className="rounded-3xl bg-[#c3f801] px-5 py-2.5 text-[15px] font-bold text-black cursor-pointer">
                    Go to workouts
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
