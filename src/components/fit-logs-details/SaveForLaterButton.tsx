"use client";

import { FitLogsContext } from "@/context/FitLogsContext";
import type { IFitLog } from "@/types/type";
import React, { useContext } from "react";
import { toast } from "sonner";

const SaveForLaterButton = ({ fitlog }: { fitlog: IFitLog }) => {
  const context = useContext(FitLogsContext);

  if (!context) {
    throw new Error("SaveForLaterButton must be used inside FitLogsProvider");
  }

  const { saveForLater, setSaveForLater } = context;

  const handleSavedForLater = () => {
    const exists = saveForLater.some((item) => item.id === fitlog.id);
    if (!exists) {
      setSaveForLater([...saveForLater, fitlog]);
      toast.success("Exercise saved for later");
    } else {
      toast.error("Exercise is already saved");
    }
  };

  return (
    <button
      className=" button-shrink rounded-lg border border-[#343943] px-5 py-3 text-sm font-medium cursor-pointer"
      onClick={() => handleSavedForLater()}
    >
      Save for later
    </button>
  );
};

export default SaveForLaterButton;
