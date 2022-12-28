import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavStore } from '../utils/store';
import TextField from '../components/TextField';
import TextArea from '../components/TextField/TextArea';

const AddNote = () => {
    const navigateTo = useNavStore(state => state.navigateTo);
    const title = useRef();
    const body = useRef();

    useEffect(() => {
        navigateTo(0, "Add Note");
        let timer;
        title.current.onkeyup = () => {
            clearTimeout(timer);
            // TODO: Save Todo
            timer = setTimeout(() => toast("Save"), 1000);
        }

        body.current.onkeyup = () => {
            clearTimeout(timer);
            // TODO: Save Todo
            timer = setTimeout(() => toast("Save"), 1000);
        }

        clearTimeout(timer);
        body.current.removeEventListener('keyup', () => { });
        title.current.removeEventListener('keyup', () => { });
    }, [])

    return (
        <section>
            <TextField label="Title" value={title} errorText="Please provide a title for your note." />
            <TextArea label="Body" value={body} errorText="Please provide a body for your note." />
        </section>
    );
}

export default AddNote;