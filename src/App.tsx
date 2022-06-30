import { useEffect, useState } from 'react'
import axios from 'axios';
import { User } from './mocks/handlers'

function App() {
  const [user, setUser] = useState<User | null>(null);
  const getUser = async () => {
    const res = await axios('http://localhost:3000/user');
    const data = res.data;
    setUser(data);
  }
  
  useEffect(() => {
    getUser();
  }, [])

  if (!user) <div>loading...</div>

  return (
    <div className='main'>
      <div>Hello</div>
      <div>{user?.id}</div>
      <div>{user?.lastName}</div>
      <div>{user?.firstName}</div>
    </div>
  )
}

export default App


