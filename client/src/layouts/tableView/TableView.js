import React from 'react';
import TableRawItem from './components/TableRawItem';

const TableView = (props) => {

    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>№</th>
                    <th scope='col'>ФИО</th>
                    <th scope='col'>Телефон</th>
                    <th scope='col'>Заметки</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(item => (
                        <TableRawItem
                            id={item.id}
                            fullName={item.fullName}
                            cellPhone={item.cellPhone}
                            note={item.note}
                        />
                    ))
                }
            </tbody>
        </table>
    );
}

export default TableView;