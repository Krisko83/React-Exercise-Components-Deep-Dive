import { useEffect, useState } from "react";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Pagination from "./components/Pagination.jsx";
import UserList from "./components/UserList.jsx";
import UserSearch from "./components/UserSearch.jsx";
import CreateEditModal from "./components/CreateEditModal.jsx";
import './styles.css'

const usersApi = 'https://jekwxfohagnknpkqdgdo.supabase.co/rest/v1/users';
const apikey = "sb_publishable_5H15oY-8n1QtXELqWorURg_FvFk-0Ha";

function App() {
  const [users, setUsers] = useState([]);
  const [showCreateEditModal, setShowCreateEditModal] = useState(false);

    async function fetchUsers() {
    const res = await fetch(usersApi, {
      headers: {
        apikey
      }
    });

    const data = await res.json();

    return data;
  };
  

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data))
      .catch(err => console.log('Fetching error: ', err)
      )
  }, []);

  const createUserHandler = () => {
    setShowCreateEditModal(true)
  }

  const addUserCloseHandler = () => {
    setShowCreateEditModal(false)
  };

  const submitUserhandler = async (newUser) => {
    try {
      await fetch(usersApi, {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
          apikey
        },
        body: JSON.stringify(newUser)
      })
      const updatedUser = await fetchUsers();
      setUsers(updatedUser);

    } catch (error) {
      console.log(error)
    } finally {
      setShowCreateEditModal(false)
    }

  }

 




  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">

          <UserSearch />

          <UserList users={users} />

          <button className="btn-add btn" onClick={createUserHandler}>Add new user</button>
          {showCreateEditModal && <CreateEditModal onClose={addUserCloseHandler} onSubmit={submitUserhandler} />}

          <Pagination />

        </section>
      </main >

      <Footer />
    </>
  )
}

export default App
