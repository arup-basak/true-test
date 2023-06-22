import React from 'react'
import { Table } from '@/libs/interface'

interface TableProps {
  data: Table[]
}

const Table = (props: TableProps) => {
  return (
    <table className='border'>
      <tbody>
        {
          props.data.map((column, key) => (
            <tr key={key} className=''>
              <td className='bg-slate-50 pl-5 border'>
                {column.key}
              </td>
              <td className='p-2 pl-5 border'>
                {`${column.value}`}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table