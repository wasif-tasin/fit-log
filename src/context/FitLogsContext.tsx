"use client";
import type { IFitLog } from "@/Types/type";
import {
    createContext,
    useState,
    useEffect,
    startTransition,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react";

const readStoredData = <Data,>(key: string, fallback: Data): Data => {
    if (typeof window === "undefined") return fallback;

    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch {
        return fallback;
    }
};

interface IFitLogsContext {
    todayPlan: IFitLog[];
    setTodayPlan: Dispatch<SetStateAction<IFitLog[]>>;
    saveForLater: IFitLog[];
    setSaveForLater: Dispatch<SetStateAction<IFitLog[]>>;
}

export const FitLogsContext = createContext<IFitLogsContext | null>(null);

const FitLogsProvider = ({ children }: { children: ReactNode }) => {
    const [todayPlan, setTodayPlan] = useState<IFitLog[]>([]);

    const [saveForLater, setSaveForLater] = useState<IFitLog[]>([]);
    const [Hydrated, setHydrated] = useState(false);

    useEffect(() => {
        const savedTodayPlan = readStoredData<IFitLog[]>("todayPlan", []);
        const savedSaveForLater = readStoredData<IFitLog[]>("saveForLater", []);

        startTransition(() => {
            setTodayPlan(savedTodayPlan);
            setSaveForLater(savedSaveForLater);
            setHydrated(true);
        });
    }, []);

    useEffect(() => {
        if (!Hydrated) return;
        localStorage.setItem("todayPlan", JSON.stringify(todayPlan));
    }, [todayPlan, Hydrated]);

    useEffect(() => {
        if (!Hydrated) return;
        localStorage.setItem("saveForLater", JSON.stringify(saveForLater));
    }, [saveForLater, Hydrated]);

    const sharedData = {
        todayPlan,
        setTodayPlan,
        saveForLater,
        setSaveForLater,
    };

    return (
        <FitLogsContext.Provider value={sharedData}>
            {children}
        </FitLogsContext.Provider>
    );
};

export default FitLogsProvider;
