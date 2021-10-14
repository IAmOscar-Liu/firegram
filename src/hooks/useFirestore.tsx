import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection: string) => {
    const [docs, setDocs] = useState<Array<any>>([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
          .orderBy('createdAt', 'desc')
          .onSnapshot((snap) => {
              let documents: any[] = [];
              snap.forEach(doc => {
                  documents.push({
                      ...doc.data(),
                      id: doc.id
                  });
              });
              // console.log("Start !!");
              setDocs(documents);
          });

        return () => { console.log('unsub'); return unsub();} // unsubcribe it from collection when we no longer use it 
    }, [collection])

    return { docs };
}

export default useFirestore;