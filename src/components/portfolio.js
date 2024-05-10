import React, { useState } from 'react';
import book1 from "../assets/images/book1.jpg";

const data = [
    {
        id: 1,
        title: 'Image 1',
        description: 'Description for Image 1',
        imageUrl: book1,
    },
    {
        id: 2,
        title: 'Image 2',
        description: 'Description for Image 2',
        imageUrl: book1,
    },
    {
        id: 3,
        title: 'Image 3',
        description: 'Description for Image 3',
        imageUrl: book1,
    },
    {
        id: 4,
        title: 'Image 4',
        description: 'Description for Image 4',
        imageUrl: book1,
    },
    {
        id: 5,
        title: 'Image 5',
        description: 'Description for Image 5',
        imageUrl: book1,
    },
    {
        id: 6,
        title: 'Image 6',
        description: 'Description for Image 6',
        imageUrl: book1,
    },
    // Add more data as needed
];

const Portfolio = (isBg) => {
    const [selectedImage, setSelectedImage] = useState(data[0]);

    const handleButtonClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <section
            id="portfolio"
            className={`section-padding achievement ${isBg === "yes" ? "bg-one" : ""
                }`}
        >
            <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>

                <div style={{ flex: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        {data.map((image, index) => (
                            <React.Fragment key={image.id}>
                                <a
                                    onClick={() => handleButtonClick(image)}
                                    className={selectedImage.id === image.id ? 'active smooth button button__primary me-3' : 'smooth button button__primary me-3'}
                                >
                                    <span>Image {image.id}</span>
                                </a>
                                {(index + 1) % 3 === 0 && <br />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div style={{ flex: '50%', display: 'flex', flexDirection: 'column', padding: '100px' }}>
                    <h2>{selectedImage.title}</h2>
                    <p>{selectedImage.description}</p>
                    <img src={selectedImage.imageUrl} alt={selectedImage.title} style={{ height: 'auto', width: "100%" }} className='panel cover-panel' />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
