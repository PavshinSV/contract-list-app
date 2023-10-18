import React, { useState } from "react";

const FormNewItem = (props) => {

    const [fullName, setFullName] = useState('');
    const [cellPhone, setcellPhone] = useState('');
    const [note, setNote] = useState('');

    const submit = () => {
        if (fullName === "" || cellPhone === "") return;
        props.appendContact(fullName, cellPhone, note);
        setFullName('');
        setNote('');
        setcellPhone('');
    }

    return (
        <div className='mt-3'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>ФИО</label>
                    <input className='form-control' type='text'
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                        }} />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Телефон</label>
                    <input className='form-control' type='text'
                        value={cellPhone}
                        onChange={(e) => {
                            setcellPhone(e.target.value)
                        }} />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Заметка</label>
                    <textarea className='form-control' raws={40}
                        value={note}
                        onChange={(e) => {
                            setNote(e.target.value)
                        }} />
                </div>

                <div>
                    <button
                        type='button'
                        className='btn btn-primary'
                        onClick={submit}
                    >
                        Новый контакт
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormNewItem;