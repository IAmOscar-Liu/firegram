import React from 'react';

interface Props {
    selectedImg: string,
    setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>,
}

const Modal: React.FC<Props> = ({selectedImg, setSelectedImg}) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const id: string = (e.target as HTMLInputElement).id; // You have to cast e.target into HTMLInputElement
        if (id === 'backdrop') {
            setSelectedImg(null);
        }
    }
    
    return (
        <div id='backdrop' className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic"/>
        </div>
    );
}

export default Modal;