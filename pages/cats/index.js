import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav';

const index = () => {
    const [cats, setCats] = useState([])

    const fectchData = async () => {
        const res = await fetch('/api/cats')
        const data = await res.json()
        console.log(data);
        setCats(data)
    }

    useEffect(() => {

        fectchData()
    }, [])

    return (
        <>
            <Nav />
            <div className='container mt-5'>

                <div style={{display:"flex", flexWrap:"wrap"}}>
                    {
                        cats.map((cat, index) => <Card cat={cat} key={index}></Card>)
                    }

                </div>
            </div>
        </>
    );
};

export default index;