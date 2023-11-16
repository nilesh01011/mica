import React from 'react'
import Dropdown from './Dropdown'

function Header() {
    return (
        <div className='py-[10px] flex items-center justify-between px-[40px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15)]'>
            {/* left side */}
            <div className='flex items-center gap-[10px]'>
                <Dropdown lable="Select Project" />
                <Dropdown lable="EBOM" />
                <Dropdown lable="BOM Revision" />
            </div>
            {/* right side */}
            <div className='flex items-center gap-[30px]'>
                <div className='relative'>
                    <small className='w-[16px] h-[16px] rounded-full bg-[#FF3E5B] text-white absolute top-0 -right-1 flex items-center justify-center'>99</small>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.3862 3.77595C10.5485 3.00386 11.2124 2.39999 12.0445 2.39999C12.8864 2.39999 13.5562 3.01832 13.7083 3.80359C16.3656 4.60418 18.287 7.15457 18.287 10.1429V14.4328C18.287 14.7362 18.4029 15.0224 18.6017 15.2296L21.3522 18.0969C21.8554 18.6215 21.5486 19.6 20.7254 19.6H14.4951C14.2346 20.7331 13.2526 21.6 12.0445 21.6H11.7704C10.5622 21.6 9.58024 20.7331 9.31974 19.6H3.27463C2.45142 19.6 2.1446 18.6215 2.64783 18.0969L5.39832 15.2296C5.59711 15.0224 5.71296 14.7362 5.71296 14.4328V10.1429C5.71296 7.11926 7.68011 4.54397 10.3862 3.77595ZM12 4.74332C9.20714 4.78137 6.91296 7.16117 6.91296 10.1429V14.4328C6.91296 15.0387 6.6823 15.6246 6.2643 16.0603L4.01993 18.4H19.9801L17.7357 16.0603C17.3177 15.6246 17.087 15.0387 17.087 14.4328V10.1429C17.087 7.16117 14.7929 4.78137 12 4.74332ZM10.578 19.6C10.793 20.0808 11.2575 20.4 11.7704 20.4H12.0445C12.5573 20.4 13.0218 20.0808 13.2369 19.6H10.578Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                </div>
                {/* user icons */}
                <div className='flex items-center gap-[10px]'>
                    <span className='w-[30px] h-[30px] rounded-full border-[1px] border-[#B5B5B6] bg-[#E6E6E6] flex items-center justify-center text-black font-bold text-[12px]'>JD</span>
                    {/* arrow icons */}
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.2735 4.50818C14.4346 4.65928 14.4428 4.91241 14.2917 5.07358L8.29172 11.4736C8.2161 11.5542 8.11046 11.6 7.9999 11.6C7.88934 11.6 7.7837 11.5542 7.70809 11.4736L1.70809 5.07357C1.55699 4.91241 1.56516 4.65928 1.72632 4.50818C1.88749 4.35709 2.14062 4.36526 2.29172 4.52642L7.9999 10.6152L13.7081 4.52642C13.8592 4.36526 14.1123 4.35709 14.2735 4.50818Z" fill="#FF3E5B" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header