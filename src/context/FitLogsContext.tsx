"use client";
import type { IFitLog } from '@/Types/type';
import React, { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';

interface IFitLogsContext {
  todayPlan: IFitLog[];
  setTodayPlan: Dispatch<SetStateAction<IFitLog[]>>;
  saveForLater: IFitLog[];
  setSaveForLater: Dispatch<SetStateAction<IFitLog[]>>;
}

export const FitLogsContext = createContext <IFitLogsContext | null>(null)

const FitLogsProvider = ({ children }: { children: ReactNode }) => {

    const [todayPlan, setTodayPlan] = useState <IFitLog[]>([]);
    const [saveForLater, setSaveForLater] = useState<IFitLog[]>([]);

    const sharedData = {
        todayPlan,
        setTodayPlan,
        saveForLater,
        setSaveForLater,
    }

    return (
        <FitLogsContext.Provider value={sharedData}>{children}</FitLogsContext.Provider>
    );
};

export default FitLogsProvider;