import React from 'react'
import Table from '../Table/table'
import tableData7 from '@/app/engineering/tableData7'
import tableData8 from '@/app/engineering/tableData8'

function ProjectSoftware() {
    return (
        <div className='mt-10'>
            <h2 className={`mb-4 font-bold !leading-tight text-green-900 dark:text-white mt-10 uppercase text-[23px]`}>
                Project Management Software
            </h2>
            <Table isBold={true} tableDataCol1={tableData7.tableDataCol1} tableDataCol2={tableData7.tableDataCol2} />
            <h2 className={`mb-4 font-bold !leading-tight text-green-900 dark:text-white mt-10 uppercase text-[23px]`}>
                Economic Financial Analysis Software
            </h2>
            <Table isBold={true} tableDataCol1={tableData8.tableDataCol1} tableDataCol2={tableData8.tableDataCol2} />

        </div>
    )
}

export default ProjectSoftware