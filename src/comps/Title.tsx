import React from 'react'

interface Props {

}

const Title: React.FC<Props> = () => {
    return (
        <div className="title">
            <h1>FireGram</h1>
            <h2>Your Pictures</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
}

export default Title;