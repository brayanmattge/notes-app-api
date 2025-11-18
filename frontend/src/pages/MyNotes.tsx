import { useEffect, useState } from 'react';
import Card from '../components/Card'
import './MyNotes.css'
import type { CardProps } from '../models/card-props';
import { edit, getAll, remove, save } from '../services/NoteService';

function MyNotes() {
    let [listRegisters, setListRegisters] = useState<Array<CardProps>>([])
    let [registerDialog, setRegisterDialog] = useState<boolean>(false); 
    let [register, setRegister] = useState<CardProps>({
        id: '', 
        title: '',
        description: '',
        date: ''
    });

    useEffect(() => {
        getAllRegisters();
    }, [])

    function openDialog() {
        setRegisterDialog(true);
    }

    function closeDialog() {
        setRegisterDialog(false);
    }

    function newRegister() {
        openDialog();
        setRegister({
            id: '', 
            title: '',
            description: '',
            date: ''
        })
    }

    function editRegister(register: CardProps) {
        openDialog();
        setRegister(register);
    }

    function saveRegister(register: CardProps) {
        if (!register.id) {
            saveNewRegister(register);
            return;
        }
        saveEditRegister(register);
    }

    async function saveNewRegister(register: CardProps) {
        const response = await save(register);
        if (!response) {
            throw new Error('It was not possible save note, please try again.');
        }
        await getAllRegisters();
        closeDialog();
    }

    async function saveEditRegister(register: CardProps) {
        const response = await edit(register);
        if (!response) {
            throw new Error('It was not possible edit note, please try again.');
        }
        await getAllRegisters();
        closeDialog();
    }

    async function deleteRegister(register: CardProps) {
        const response = await remove(register);
        if (!response) {
            throw new Error('It was not possible remove note, please try again.');
        }
        await getAllRegisters();
        closeDialog();
    }


    async function getAllRegisters() {
        const response = await getAll()
        if (!response) {
            throw new Error('It was not possible to get all notes, please try again.');
        }
        setListRegisters(response);
    }

    return (
        <div className="my-notes">
            <div className="notes-container">
                <div className="header">
                    <h1 className='title'>Notes</h1>
                </div>
                <div className="list-notes">
                    { listRegisters.map(item => (
                        <Card key={item.id} title={item.title} onClick={() => editRegister(item)}></Card>
                    ))}
                </div>
                { registerDialog && (
                    <div className='new-note'>
                        <button className='close-button focused-button' onClick={closeDialog}>X</button>
                        <div className='top-bar-note'>
                            <span className='title-new'>Title</span>
                            <input className='title-input' placeholder='My new note...' maxLength={23} 
                            value={register?.title} onChange={(e) => setRegister({...register, title: e.target.value})}></input>
                        </div>
                        <div className='description-note'>
                            <span className='description-new'>Description</span>
                            <textarea className='description-input' placeholder='My description here...' 
                            value={register?.description} onChange={(e) => setRegister({...register, description: e.target.value})}></textarea>
                        </div>
                    </div>
                )}
                <div className="footer">
                    <div className="actions">
                        {!registerDialog ? (
                            <button className="new-note-button focused-button" onClick={() => newRegister()}>New</button>
                        ) : (
                            <button className="new-note-button focused-button" onClick={() => saveRegister(register!)}>Save</button>
                        )}
                        {registerDialog && (
                            <button className="delete-note-button focused-button" onClick={() => deleteRegister(register!)}>Delete</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyNotes