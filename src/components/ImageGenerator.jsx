import React, { useState, useEffect } from "react";

const ImageGenerator = (props) => {
    const [imageUrl, setImageUrl] = useState('');
  const [keyword, setKeyword] = useState('cats');

  useEffect(() => {
    const API_URL= "";
    const fetchImage = async () => {
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_URL}&q=${props.keyword}&image_type=photo`
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.hits.length);
      const image = data.hits[randomIndex];
      setImageUrl(image.webformatURL);
    };
    fetchImage();
  }, [props.keyword]);

  function downloadImage(imageUrl){

    fetch(imageUrl)
      .then(response => {
        return response.blob();
      })
      .then(blob => {
        const objectUrl = URL.createObjectURL(blob);

        const link = document.createElement('a');

        link.href = objectUrl;
        link.download = 'image.jpg';

        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(objectUrl);
        document.body.removeChild(link);

      })
  }
  return (
    <div className="image-container">
        <img src={imageUrl} alt={props.keyword}/>
        <button onClick={downloadImage}>Download Image</button>
    </div>
  );
}

export default ImageGenerator;