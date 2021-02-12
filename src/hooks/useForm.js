// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initValue) => {
    const [ value, setValue ] = useState(initValue);

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue(!initValue);
    }

    return [ value, handleChange, handleSubmit ];
}

export default useForm;