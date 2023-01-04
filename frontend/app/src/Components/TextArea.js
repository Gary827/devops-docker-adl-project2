import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

function App(props) {
    const maxLength = props.maxLength;
    const getValue = props.getValue

    const onChange = (e) => {
        // console.log('Change:', e.target.value);
        getValue(e.target.value)
    };

    return (
        <>
            <TextArea showCount maxLength={maxLength} onChange={onChange} />
            <br/>
        </>
    );
}
export default App;