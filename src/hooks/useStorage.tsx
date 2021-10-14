import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file: File) => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [url, setUrl] = useState<string | null>(null);

    useEffect(() => {
        // references
        const storageRef: firebase.storage.Reference = projectStorage.ref(file.name);
        const collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData> = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage: number = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err.message);
        }, async() => {
            const url: string = await storageRef.getDownloadURL();
            collectionRef.add({
                url,
                createdAt: timestamp(), 
            });
            setUrl(url);
        });
    }, [file])

    return {
        progress,
        url,
        error,
    };
}

export default useStorage;