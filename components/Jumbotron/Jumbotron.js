import React from 'react';
import { useRouter } from 'next/router';

const Jumbotron = () => {
    const router = useRouter()
    return (
        <div className="jumbotron jumbotron-fluid mt-5">
            <div className="container">
                <h1 className="display-4">Cats world</h1>
                <p className="lead">Find your best Friend today. Adopt a wonder cat</p>
                <butto className='btn btn-primary' onClick={()=> router.push("/cats")}>Start Looking</butto>
            </div>
        </div>
    );
};

export default Jumbotron;