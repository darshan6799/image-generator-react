import React from "react";
import { useState } from "react";
import ImageGenerator from './ImageGenerator';

const DisplayImage = () => {
    const [keyword, setKeyword] = useState('');
    const [image, setImage] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        setImage(keyword);
    }

    return (
        <div className="box">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <ImageGenerator keyword={image} />
        </div>
    );
}

export default DisplayImage;