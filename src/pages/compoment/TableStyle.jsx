import React from 'react'
import useSort from '../../hook/useSort'

function TableStyle({ data, columns ,setsort,setdata}) {
  const {onHanleChange} = useSort(setsort,setdata,data)
  
  return (
    <div className='layout_table'>
      TableStyle
      <form action="">
        <select name="" id="" onChange={onHanleChange}>
          {columns.map((head)=>(
            <option value={`${head.field}`}>{head.Header}</option>
          ))}
        </select>
      </form>
      <table className="table-auto">
        <thead>
          <tr>
            {columns.map((head) => (
              <th>{head.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((col) => (
                  <td>
                    {col?.Columsfunction ? (
                      <span>{col.Columsfunction(row[col?.field])}</span>
                    ): col?.AcitonFunc ? (
                      <span>{col?.AcitonFunc(row[col?.field])}</span>
                    ) : (
                      <span>{row[col?.field]} </span>
                    )}
                  </td>
              ))}
            </tr>)
          )}
        </tbody>

      </table>
    </div>
  )
}

export default TableStyle
