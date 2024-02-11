import React, { useState, useEffect } from 'react';
import { fetchUsers, adicionarTagAoUsuario, removerTagDoUsuario} from './LoginFuncao';

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleAddTag = async (userId, tag) => {
    const updatedUser = await adicionarTagAoUsuario(userId, tag);
    setUsers(users.map(user => user.id === userId ? updatedUser : user));
  };

  const handleRemoveTag = async (userId, tag) => {
    const updatedUser = await removerTagDoUsuario(userId, tag);
    setUsers(users.map(user => user.id === userId ? updatedUser : user));
  };

  

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <div>{user.name}</div>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            handleAddTag(user.id, e.target.tag.value);
          }}>
            <input name="tag" type="text" placeholder="Adicionar tag" />
            <button type="submit">Adicionar Tag</button>
          </form>
         
          {user.tags.map(tag => (
            <div key={tag}>
              {tag}
              <button onClick={() => handleRemoveTag(user.id, tag)}>Remover Tag</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserManagementPage;
