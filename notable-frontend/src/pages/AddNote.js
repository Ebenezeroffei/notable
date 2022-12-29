import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavStore } from '../utils/store';
import { waitTime } from '../utils/misc';
import TextField from '../components/TextField';
import TextArea from '../components/TextField/TextArea';

const AddNote = () => {
    const navigateTo = useNavStore(state => state.navigateTo);
    const title = useRef();
    const body = useRef();

    useEffect(() => {
        navigateTo(0, "Add Note");

        waitTime(title, () => toast("Title"));
        waitTime(body, () => toast("Body"));

        return () => {
            body.current.removeEventListener('keyup', () => { });
            title.current.removeEventListener('keyup', () => { })
        };
    }, [])

    return (
        <section>
            <TextField label="Title" value={title} errorText="Please provide a title for your note." />
            <TextArea label="Body" value={body} errorText="Please provide a body for your note." />
        </section>
    );
}

export default AddNote;