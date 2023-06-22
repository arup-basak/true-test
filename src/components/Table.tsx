import React from "react";
import { ReportResult } from "@/libs/interface";

interface TableProps {
  tableData: ReportResult[];
}

const Table = (props: TableProps) => {
  return (
    <div className="w-full">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-700">
              Test Name
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-700">
              Result
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-700">
              Unit
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-700">
              Safe Range
            </th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((val, key) => {
            return (
              <tr key={key}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {val.testName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {val.result}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {val.unit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
