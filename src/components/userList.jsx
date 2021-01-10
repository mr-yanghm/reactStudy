import React from 'react';
import User from './user';

const UserList = ({ users }) => {
    return (
        <div>
            {
                users.map((user) => <User key={user.id} user={user} />)
                // users.map((user, index) => <User key={index} user={user} onRemove={onRemove} onToggle={onToggle} />)
            }
        </div>
    )
};

export default React.memo(UserList);