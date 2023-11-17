import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Table from '../components/Table'

function Dashbaord() {

    const tableHead = [
        {
            key: "1",
            label: "Cost System",
        },
        {
            key: "2",
            label: "Cost System",
        },
        {
            key: "3",
            label: "System Lead",
        },
        {
            key: "4",
            label: "System Name",
        },
        {
            key: "5",
            label: "LV",
        },
    ];

    const pagination = [
        {
            count: 1,
        },
        {
            dots: true
        },
        {
            count: 4,
        },
        {
            count: 5,
        },
        {
            count: 6,
        },
        {
            count: 7,
        },
        {
            count: 8,
        },
        {
            dots: true
        },
        {
            count: 50
        }
    ]

    return (
        <div className='flex h-screen bg-white'>
            <Sidebar />
            {/* main contains */}
            <div className='w-full h-full'>
                {/* header */}
                <Header />
                {/* Dashbaord contents */}
                <div className='flex flex-col gap-[20px] px-[40px] pt-[20px]'>
                    {/* title */}
                    <h1 className='text-[24px] font-bold'>Home Title</h1>
                    {/* table */}
                    <div className='w-full border-[1px] border-[#E6E6E6] relative overflow-scroll tableContainer' style={{ minHeight: "calc(100vh - 200px)" }}>
                        <Table tableHead={tableHead} />
                    </div>
                    {/* footer */}
                    <div className='flex items-center justify-between'>
                        {/* left side */}
                        <div className='flex items-center gap-[16px]'>
                            <span className='text-[#545454] text-[14px] font-[500]'>Total 85 items</span>
                            <p className='border-[1px] border-[#B5B5B6] p-[4px_12px] cursor-pointer rounded-[4px] flex items-center gap-[10px] justify-between'>
                                <span className='text-[14px] text-[#0B0B0C]'>10 / page</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.4895 3.94464C12.6305 4.07684 12.6376 4.29834 12.5054 4.43936L7.25543 10.0394C7.18927 10.1099 7.09684 10.15 7.0001 10.15C6.90335 10.15 6.81093 10.1099 6.74476 10.0394L1.49476 4.43936C1.36255 4.29834 1.3697 4.07684 1.51072 3.94464C1.65174 3.81243 1.87323 3.81958 2.00543 3.9606L7.0001 9.28824L11.9948 3.9606C12.127 3.81958 12.3485 3.81243 12.4895 3.94464Z" fill="#0B0B0C" />
                                    </svg>
                                </span>
                            </p>
                        </div>
                        {/* right side */}
                        <div className='flex items-center gap-[8px]'>
                            {/* prev side */}
                            <span className='p-[10px] rounded-[4px] border-[1px] border-[#B5B5B6]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0552 1.51065C9.92303 1.36963 9.70154 1.36248 9.56052 1.49469L3.96052 6.74469C3.88995 6.81085 3.8499 6.90328 3.8499 7.00003C3.8499 7.09677 3.88995 7.1892 3.96052 7.25536L9.56052 12.5054C9.70154 12.6376 9.92303 12.6304 10.0552 12.4894C10.1874 12.3484 10.1803 12.1269 10.0393 11.9947L4.71164 7.00003L10.0393 2.00536C10.1803 1.87316 10.1874 1.65167 10.0552 1.51065Z" fill="#B5B5B6" />
                                </svg>
                            </span>
                            {/* paginations */}
                            {
                                pagination.map((ele,index) => {
                                    if(ele.dots) return <span key={index} className='p-[3px_10px] h-[36px] w-[36px] flex items-center justify-center text-[#B5B5B6]'>•••</span>;
                                    if(ele.count) return <span key={index} className='p-[3px_10px] h-[36px] w-[36px] flex items-center justify-center rounded-[4px] border-[1px] border-[#B5B5B6] text-[14px] text-[#B5B5B6]'>{ele.count}</span>;
                                })
                            }
                            {/* next side */}
                            <span className='p-[10px] rounded-[4px] border-[1px] border-[#B5B5B6]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.94476 1.51065C4.07697 1.36963 4.29846 1.36248 4.43948 1.49469L10.0395 6.74469C10.1101 6.81085 10.1501 6.90328 10.1501 7.00003C10.1501 7.09677 10.1101 7.1892 10.0395 7.25536L4.43948 12.5054C4.29846 12.6376 4.07697 12.6304 3.94476 12.4894C3.81256 12.3484 3.8197 12.1269 3.96072 11.9947L9.28836 7.00003L3.96072 2.00536C3.8197 1.87316 3.81256 1.65167 3.94476 1.51065Z" fill="#B5B5B6" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashbaord