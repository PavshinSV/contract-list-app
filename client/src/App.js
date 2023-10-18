import './App.css';
import TableView from './layouts/tableView/TableView';
import FormNewItem from './layouts/formNewItem/FormNewItem';
import React, { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    { id: 1, fullName: 'First', cellPhone: '+7(999)999-99-99', note: 'note 1' },
    { id: 2, fullName: 'Second', cellPhone: '+7(888)999-99-99', note: 'note 2' },
    { id: 3, fullName: 'Third', cellPhone: '+7(777)777-77-77', note: 'note 3' }
  ]);

  const appendContact = (fullName, cellPhone, note) => {
    const item = {
      id: items.length + 1,
      fullName: fullName,
      cellPhone: cellPhone,
      note: note
    };
    setItems([...items, item]);
  }

  const removeContact = (id) => {
    setItems(items.filter(item => item.id != id))
  }


  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>
          <h1>Список контактов</h1>
        </div>
        <div className='card-body'>
          <TableView data={items} removeContact={2}/>

          <FormNewItem appendContact={appendContact} />
        </div>
      </div>
    </div >
  );
}

export default App;
