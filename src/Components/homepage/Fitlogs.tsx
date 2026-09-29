import FitLogsCard from '@/Components/shared/FitLogsCard';
import type { IFitLog } from '@/Types/type';


const getFitLogs = async () => {
    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog',);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log("Error Fetching Fit Logs", error);
        return [];
    }
};

const FitLogs = async () => {
    const FitLogsData = await getFitLogs();
    return (
        <section className="w-full min-w-0 px-0 py-17.5">
            <div className="grid w-full min-w-0 grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                {
                    FitLogsData.map((fitlog: IFitLog) => (
                        <FitLogsCard key={fitlog.id} fitlog={fitlog}></FitLogsCard>
                    ))
                }

            </div>
        </section>
    );
};

export default FitLogs;