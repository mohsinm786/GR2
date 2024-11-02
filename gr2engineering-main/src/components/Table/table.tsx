import React from 'react';

interface TableProps {
    isBold?:boolean;
    columnName?: string[];        // Column names for the table header
    tableDataCol1?: string[];     // Data for the first column
    tableDataCol2?: string[];     // Data for the second column
    tableDataCol3?: string[];     // Data for the third column
}

const Table: React.FC<TableProps> = ({isBold, columnName, tableDataCol1, tableDataCol2, tableDataCol3 }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-blue-400 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {/* Map over columnName to render table headers */}
                        {columnName?.map((name, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* Loop through the rows by mapping over one column (e.g., tableDataCol1) */}
                    {tableDataCol1?.map((_, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {/* First column */}
                            <td  className={isBold ? "px-6 py-4 border-b font-bold" : "px-6 py-4 border-b bold"}>
                                {tableDataCol1[rowIndex]}
                            </td>
                            {/* Second column */}
                            <td className="px-6 py-4 border-b">
                                {tableDataCol2 && tableDataCol2[rowIndex]}
                            </td>
                            {/* Third column */}
                            <td className="px-6 py-4 border-b">
                                {tableDataCol3 && tableDataCol3[rowIndex]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
