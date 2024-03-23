import React from 'react';
export const IconAndContent = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="iconic-1 p-6">
                    <span className='text-[20px] items-center flex  gap-[15px] '>
                        <div className='text-sky-600 items-center flex'>
                            <ion-icon name="cart-outline"></ion-icon>
                        </div>
                        <h1 className=''>
                            FREE DELIVERY
                        </h1>
                    </span>
                    <p class='text-[18px] pl-9 mt-2 text-slate-400'>
                        Consectetur adipi elit lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="iconic-2 p-6">
                    <span className='text-[20px] items-center flex  gap-[15px] '>
                        <div className='text-sky-600 items-center flex'>
                            <ion-icon name="trophy-outline"></ion-icon>
                        </div>
                        <h1 className=' '>
                            QUALITY GUARANTEE
                        </h1>
                    </span>
                    <p class='text-[18px] pl-9 mt-2 text-slate-400'>
                        Dolor sit amet orem ipsu mcons ectetur adipi elit.
                    </p>
                </div>
                <div className="iconic-3 p-6">
                    <span className='text-[20px] items-center flex  gap-[15px] '>
                        <div className='text-sky-600 items-center flex'>
                            <ion-icon name="ticket-outline"></ion-icon>
                        </div>
                        <h1 className=' '>
                            DAILY OFFERS
                        </h1>
                    </span>
                    <p class='text-[18px] pl-10 mt-2 text-slate-400'>
                        Amet consectetur adipi elit loreme ipsum dolor sit.
                    </p>
                </div>
                <div className="iconic-4 p-6">
                    <span className='text-[20px] items-center flex  gap-[15px] '>
                        <div className='text-sky-600 items-center flex'>
                            <ion-icon name="shield-checkmark-outline"></ion-icon>
                        </div>
                        <h1 className=''>
                            100% SECURE PAYMENT
                        </h1>
                    </span>
                    <p class='text-[18px] pl-10 mt-2 text-slate-400'>
                        Rem Lopsum dolor sit amet, consectetur adipi elit.
                    </p>
                </div>
            </div>
        </>
    )
}
