"use client";

import { FitLogsContext } from "@/context/FitLogsContext";
import type { IFitLog } from "@/Types/type";
import React, { useContext } from "react";
import { toast } from "sonner";

const TodayPlanButton = ({ fitlog }: { fitlog: IFitLog }) => {
  const context = useContext(FitLogsContext);

  if (!context) {
    throw new Error("TodayPlanButton must be used inside FitLogsProvider");
  }

  const { todayPlan, setTodayPlan } = context;

  const handleTodayPlan = () => {
    const exists = todayPlan.some((item) => item.id === fitlog.id);
    if (!exists) {
      setTodayPlan([...todayPlan, fitlog]);
      toast.success("Exercise added to today's plan");
    } else {
      toast.error("Exercise is already in today's plan");
    }
  };

  return (
    <button
      className="button-shrink rounded-lg bg-[#c3f801] px-5 py-3 text-sm font-bold text-black cursor-pointer"
      onClick={() => handleTodayPlan()}
    >
      Add to today&apos;s plan
    </button>
  );
};

export default TodayPlanButton;
