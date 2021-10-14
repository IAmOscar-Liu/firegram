import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

interface Props {
    file: File,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
}

const ProgressBar: React.FC<Props> = ({file,setFile}) => {
    const {url, progress} = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]) // You have to add setFile to the dependencies because it is inside the useEffect

    return (
        <div className="progress-bar" style={{ width: progress + '%' }}></div>
    );
}

export default ProgressBar;