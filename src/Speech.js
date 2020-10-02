import React,{ useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const Speech=()=>{

    const [value, setvalue] = useState('');
    const { speak } = useSpeechSynthesis();
    
    return(
        <div className="speech">
            <div className="group">
                <h2>Speech Synthesis App</h2>
            </div>
            <div className="group">
                <textarea rows="20" value={value} onChange={e => setvalue(e.target.value)}></textarea>
            </div>
            <div className="group">
                <button onClick={() => speak({ text: value })}>Speech</button>
            </div>
        </div>
    );
};
export default Speech;