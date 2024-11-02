import React from 'react'
import Table from '../Table/table'
import tableData from '@/app/engineering/tableData'
import tableData2 from '@/app/engineering/tableData2'
import BulletPoints from '../BulletPoints/bulletPoints'
import tableData3 from '@/app/engineering/tableData3'
import tableData4 from '@/app/engineering/tableData4'
import tableData5 from '@/app/engineering/tableData5'

function Capabilities() {
    return (
        <>
            <h2 className={`mb-4 font-bold !leading-tight text-green-900 dark:text-white mt-10 uppercase text-[23px]`}>
                EPCM
            </h2>
            <Table columnName={tableData.columnName} tableDataCol1={tableData.tableDataCol1} tableDataCol2={tableData.tableDataCol2} tableDataCol3={tableData.tableDataCol3} />

            <h2 className={`mb-4 font-bold !leading-tight text-green-900 dark:text-white mt-10 uppercase text-[23px]`}>
                Engineering Desciplines
            </h2>
            <div className='mt-10 flex flex-wrap justify-center  gap-10'>
                <BulletPoints columnName={tableData2.columnName[0]} tableDataCol={tableData2.tableDataCol1} />
                <BulletPoints columnName={tableData2.columnName[1]} tableDataCol={tableData2.tableDataCol2} />
                <BulletPoints columnName={tableData2.columnName[2]} tableDataCol={tableData2.tableDataCol3} />
                <BulletPoints columnName={tableData2.columnName[3]} tableDataCol={tableData2.tableDataCol4} />
                <BulletPoints columnName={tableData2.columnName[4]} tableDataCol={tableData2.tableDataCol5} />
                <BulletPoints columnName={tableData2.columnName[5]} tableDataCol={tableData2.tableDataCol6} />
                <BulletPoints columnName={tableData2.columnName[6]} tableDataCol={tableData2.tableDataCol7} />
                <BulletPoints columnName={tableData2.columnName[7]} tableDataCol={tableData2.tableDataCol8} />
            </div>

            <h2 className={`uppercase mb-4 font-bold !leading-tight text-green-900 dark:text-white text-[23px]`}>
            Engineering & Design Services
            </h2>
            <Table columnName={tableData3.columnName} tableDataCol1={tableData3.tableDataCol1} tableDataCol2={tableData3.tableDataCol2} tableDataCol3={tableData3.tableDataCol3} />

            <div className='mt-10'></div>
            <Table columnName={tableData4.columnName} tableDataCol1={tableData4.tableDataCol1} tableDataCol2={tableData4.tableDataCol2} tableDataCol3={tableData4.tableDataCol3} />

            <div className='mt-10'></div>
            <Table columnName={tableData5.columnName} tableDataCol1={tableData5.tableDataCol1} tableDataCol2={tableData5.tableDataCol2} tableDataCol3={tableData5.tableDataCol3} />

        </>
    )
}

export default Capabilities