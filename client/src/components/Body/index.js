import React, { useState, useEffect } from 'react';

const Body = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const getMultipleCats = async () => {
            fetch(`/api`)
                .then((response) => response.json())
                .then((data) => setData(data));
        };

        getMultipleCats();
    }, []);
    
    return (
        <div className='BodyHeader'>
            <h1>Top 10 cats of the day</h1>
            <div className='Body'>
                {data && data.map((img) => {
                    return (
                        <img className="Images" key={img.id} src={img.url} alt={img.id} width={150} height={150} />
                    )
                })}
            </div>
        </div>
    )
}

export default Body;