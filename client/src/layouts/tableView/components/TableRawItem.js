import React from "react";

const TableRawItem = (props) => {

const id = props.id;
const fullName = props.fullName;
const cellPhone = props.cellPhone;
const note = props.note;

    return (
        <tr>
            <th scope='row'>{id}</th>
            <th>{fullName}</th>
            <th>{cellPhone}</th>
            <th>{note}</th>
        </tr>
    );
}

export default TableRawItem;