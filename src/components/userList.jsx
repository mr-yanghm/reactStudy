import React from 'react';
import User from './user';

const UserList = ({ users, onRemove, onToggle }) => {
    return (
        <div>
            {
                users.map((user) => <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />)
                // users.map((user, index) => <User key={index} user={user} onRemove={onRemove} onToggle={onToggle} />)
            }
        </div>
    )
};

export default React.memo(UserList);