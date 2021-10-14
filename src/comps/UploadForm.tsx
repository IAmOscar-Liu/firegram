import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

interface Props {

}

const UploadForm: React.FC<Props> = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const types: string[] = ['image/png', 'image/jpeg'];
    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let selected = e.target.files ? e.target.files[0] : null;
        console.log(selected);

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
              { error && <div className="error">{ error }</div> }
              { file && <div>{ file.name }</div> }
              { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
}

export default UploadForm;