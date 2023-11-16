import React from 'react'

function Table({ tableHead, tableBody, }) {
    return (
        <table className='w-full'>
            {/* tabel heading */}
            <thead
                className="tableHeads bg-[#F2F2F2] rounded-[4px] border-b-[1px] border-[#E6E6E6]"
            // style={{
            //   backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
            // }}
            >
                {tableHead.map((ele) => (
                    <th key={ele.key}
                    //  style={{ borderColor: borderColor }}
                    // className='flex items-center gap-[10px]'
                    // className='p-[13px_5px]'
                    >
                        <div className='flex items-center justify-between p-[12px_20px]'>
                            <span className='text-[14px] font-[500]'>
                                {ele.label}
                            </span>
                            {/* icons */}
                            <span
                            // style={{
                            //     display:
                            //         tableHead[0].key === ele.key ||
                            //             tableHead[tableHead.length - 1].key === ele.key
                            //             ? "none"
                            //             : "",
                            // }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="15"
                                    viewBox="0 0 14 15"
                                    fill="none"
                                >
                                    <path
                                        d="M8.66055 3.5943L8.66143 3.59522L10.5345 5.55531C10.583 5.60608 10.5953 5.67494 10.5681 5.74367C10.5548 5.77734 10.5352 5.8006 10.5172 5.81386C10.5019 5.82512 10.4828 5.83341 10.4525 5.83341L6.81719 5.83341L3.54362 5.83341C3.5031 5.83341 3.45771 5.81265 3.42973 5.74239C3.4018 5.67225 3.41461 5.60451 3.46162 5.55531L6.48428 2.3923C6.77154 2.0917 7.22991 2.09156 7.51733 2.39189C7.51746 2.39203 7.51759 2.39217 7.51772 2.3923L8.66055 3.5943Z"
                                        stroke="#B5B5B6"
                                    />
                                    <path
                                        d="M6.48646 12.6101L6.48647 12.6101L6.48438 12.6079L3.46285 9.44491L3.10131 9.79029L3.46285 9.44491C3.41436 9.39415 3.40213 9.32523 3.42929 9.25644C3.44259 9.22274 3.46225 9.19949 3.48018 9.18625C3.49542 9.17501 3.51443 9.16675 3.54462 9.16675L6.81697 9.16675L10.451 9.16675C10.4811 9.16675 10.5002 9.17499 10.5157 9.18639C10.5338 9.19979 10.5539 9.2234 10.5675 9.25772C10.5955 9.32802 10.5828 9.39717 10.5369 9.44668L8.66615 11.405L7.51704 12.6079C7.22864 12.9098 6.76625 12.9066 6.48646 12.6101Z"
                                        fill="white"
                                        stroke="#B5B5B6"
                                    />
                                </svg>
                            </span>
                        </div>
                    </th>
                ))}
            </thead>
            {/* table body contents */}
            <div className="emptyDataTable w-full flex flex-col justify-center items-center absolute left-0 top-0 bottom-0 right-0 mx-auto max-w-[350px] min-h-[465px]" style={{ color: "#545454" }}>
                {/* icons */}
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                    >
                        <path
                            d="M73.3337 39.9999H53.3337L46.667 49.9999H33.3337L26.667 39.9999H6.66699"
                            stroke="#B5B5B6"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M18.167 17.0333L6.66699 40V60C6.66699 61.7681 7.36937 63.4638 8.61961 64.714C9.86986 65.9643 11.5655 66.6666 13.3337 66.6666H66.667C68.4351 66.6666 70.1308 65.9643 71.381 64.714C72.6313 63.4638 73.3337 61.7681 73.3337 60V40L61.8337 17.0333C61.2817 15.9226 60.4309 14.9879 59.3768 14.3342C58.3228 13.6806 57.1073 13.334 55.867 13.3333H24.1337C22.8934 13.334 21.6779 13.6806 20.6238 14.3342C19.5697 14.9879 18.7189 15.9226 18.167 17.0333V17.0333Z"
                            stroke="#B5B5B6"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                {/* text */}
                <p style={{ textAlign: "center", width: "90%", margin: "0 auto" }}>
                    No Record Found
                </p>
            </div>
        </table>
    )
}

export default Table