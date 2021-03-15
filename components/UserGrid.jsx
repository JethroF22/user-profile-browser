import React from 'react';

import Grid from '../styles/Grid';

function UserGrid({ users }) {
    const formatUserData = user => (
        <div key={Math.floor(Math.random() * 10000)} className="column">
            <p>Name: {`${user.name.first} ${user.name.last}`}</p>
            <p>Age: {user.dob.age}</p>
        </div>
    )
    return (
        <Grid>
            {users.map(user => formatUserData(user))}
        </Grid>
    );
}

export default UserGrid;