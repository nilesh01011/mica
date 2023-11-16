import React from 'react'

function Dropdown({ lable }) {
    return (
        <div className='w-full min-w-[147px] h-full relative cursor-pointer flex gap-[10px] items-center justify-between rounded-[4px] p-[5px_12px] border-[1px] border-black'>
            {/* label */}
            <span className='whitespace-nowrap text-[14px]'>{lable}</span>
            {/* arrow icons */}
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.842 5.63523C18.0434 5.8241 18.0536 6.14052 17.8648 6.34197L10.3648 14.342C10.2702 14.4428 10.1382 14.5 10 14.5C9.86179 14.5 9.72975 14.4428 9.63523 14.342L2.13523 6.34197C1.94637 6.14052 1.95657 5.8241 2.15803 5.63523C2.35948 5.44637 2.6759 5.45657 2.86477 5.65803L10 13.2689L17.1352 5.65803C17.3241 5.45657 17.6405 5.44637 17.842 5.63523Z" fill="#FF3E5B" />
                </svg>
            </span>
        </div>
    )
}

export default Dropdown