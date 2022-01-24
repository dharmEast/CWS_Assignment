import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTable } from "react-table";
function TableComponent(props) {
    let {userName,storeUserDetails} = props;
    const history = useHistory();
    userName = userName || localStorage.userName;
    useEffect(()=>{
        if(!userName){
            history.push('/');
        }else{
            storeUserDetails({userName})
        }
    },[])
    const data = React.useMemo(
        () => [
            {
                col1: 'Minsk',
                col2: '27',
                col3: 'rain',
            },
            {
                col1: 'Vilnius',
                col2: '30',
                col3: 'rain',
            },
            {
                col1: 'London',
                col2: '23',
                col3: 'rain',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'City',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Temperature',
                accessor: 'col2',
            },
            {
                Header: 'Weather Forecast',
                accessor: 'col3', // accessor is the "key" in the data
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <div className="tableClass">
          <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                      <th
                          {...column.getHeaderProps()}
                          style={{
                            borderBottom: 'solid 3px red',
                            color: 'black',
                          }}
                      >
                        {column.render('Header')}
                      </th>
                  ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                          <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                              }}
                          >
                            {cell.render('Cell')}
                          </td>
                      )
                    })}
                  </tr>
              )
            })}
            </tbody>
          </table>
        </div>
    );
}

export default TableComponent;