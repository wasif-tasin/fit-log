"use client";

import { FitLogsContext } from "@/context/FitLogsContext";
import type { IFitLog } from "@/Types/type";
import React, { useContext } from "react";

const SaveForLaterButton = ({ fitlog }: { fitlog: IFitLog }) => {
  const context = useContext(FitLogsContext);

  if (!context) {
    throw new Error("SaveForLaterButton must be used inside FitLogsProvider");
  }

  const { saveForLater, setSaveForLater } = context;

  const handleSavedForLater = () => {
    setSaveForLater([...saveForLater, fitlog]);
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
