import type { IFitLog } from '@/Types/type';
import Image from 'next/image';
import React from 'react';

interface IFitLogDataProps {
    fitlog: IFitLog
}

const FitLogsCard = ({ fitlog }: IFitLogDataProps) => {
    return (
        <div className="card w-full shadow:sm overflow-hidden bg-base-100 min-w-0 shadow-sm">
            <figure className='w-full'>
                
                <Image 
                src={fitlog.image}
                alt={fitlog.name}
                height={190}
                width={400}
                className="h-65 w-full object-cover"></Image>
                    
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default FitLogsCard;