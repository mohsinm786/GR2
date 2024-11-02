import React from 'react'


interface BulletProps {
    columnName?: string;        // Column names for the table header
    tableDataCol?: string[];     // Data for the first column

}

const BulletPoints: React.FC<BulletProps> = ({ columnName, tableDataCol }) => {
    return (
        <>


            <ul className="mb-10 list-disc list-inside text-gray-700 dark:text-gray-300">
            <h1 className='mb-4 font-bold !leading-tight  dark:text-white '>{columnName}</h1>
                {tableDataCol?.map((point, index) => (
                    <>           
                        <li key={index} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                            {point}
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default BulletPoints