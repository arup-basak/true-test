import React from "react";
import { ReportResult } from "@/libs/interface";

interface TableProps {
  tableData: ReportResult[];
}

const Table = (props: TableProps) => {
  return (
    <div className="py-5">
      <table className="w-full bg-white border">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-700">
              TEST DESCRIPTION
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-700">
              RESULT VALUE
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-700">
              UNIT
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-700">
              BIOLOGICAL REFERENCE INTERVAL
            </th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((val, key) => {
            return (
              <tr key={key}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {val.testName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {val.result}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {val.unit}
                </td>
                <td className="px-6 py-4 text-gray-900">
                  {val.referenceRange}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
