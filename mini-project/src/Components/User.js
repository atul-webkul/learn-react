import React from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function User(props) {
    let params = useParams();
    let { name } = params;

    return (
        <div>
        {/* <h1>This is {name} page</h1> */}
        </div>
    );
}

export default User;
