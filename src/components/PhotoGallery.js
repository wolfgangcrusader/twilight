import React from 'react';
import "./PhotoGallery.css";

const images = [
  {
    id: 1,
    src: 'https://i.pinimg.com/564x/ba/cd/d6/bacdd6e45135c008b5e82640adbb1e41.jpg',
    alt: 'A beautiful landscape image',
  },
  {
    id: 2,
    src: 'https://i.pinimg.com/564x/b4/5e/ae/b45eae165e5a03a5979b4653e0f09c3c.jpg',
    alt: 'A beautiful flower image',
  },
  {
    id: 3,
    src: 'https://i.pinimg.com/564x/28/7f/7b/287f7b429cd25d263ca047d2adf6fe50.jpg',
    alt: 'A beautiful mountain image',
  },
  {
    id: 4,
    src: 'https://i.pinimg.com/564x/d0/49/87/d04987577d332d7a94dc89666b302d2c.jpg',
    alt: 'A beautiful waterfall image',
  },
  {
    id: 5,
    src: 'https://i.pinimg.com/236x/00/46/26/00462651862e7a880f532cf45aa2f701.jpg',
    alt: 'A beautiful waterfall image',
  },
  {
    id: 6,
    src: 'https://i.pinimg.com/236x/c3/98/a7/c398a7132dfd4b0bea4c6eda346d4e03.jpg',
    alt: 'A beautiful waterfall image',
  },
  {
    id: 7,
    src: 'https://i.pinimg.com/564x/cb/d4/c0/cbd4c0d3a9a76da6333b1e9ba832ae85.jpg',
    alt: 'A beautiful waterfall image',
  },
];

const PhotoGallery = () => {
  return (
    <>        
    <div className="characters-hero">
    <h1>Edward and Bella Forever</h1>
    </div>
    <div className='gallery-container'>
    <div className="photo-gallery">
      <ul className="photo-list">
        {images.map((image) => (
          <li key={image.id} className="photo-item">
            <img src={image.src} alt={image.alt} />
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
};

export default PhotoGallery;