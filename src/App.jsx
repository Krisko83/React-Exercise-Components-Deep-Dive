import { useEffect, useState } from "react";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Pagination from "./components/Pagination.jsx";
import UserList from "./components/UserList.jsx";
import UserSearch from "./components/UserSearch.jsx";
import CreateEditModal from "./components/CreateEditModal.jsx";
import './styles.css'


function App() {
  const [users, setUsers] = useState([]);
const [showCreateEditModal, setShowCreateEditModal] = useState(false);

  useEffect(() => {
    fetch('https://jekwxfohagnknpkqdgdo.supabase.co/rest/v1/users', {
      headers: {
        apikey: "sb_publishable_5H15oY-8n1QtXELqWorURg_FvFk-0Ha"
      }
    })
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log('Fetching error: ', err)
      )
  }, []);

  const createUserHandler = () => {
    setShowCreateEditModal(true)
  }

 

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">

          <UserSearch />

          <UserList users={users} />

          <button className="btn-add btn" onClick={createUserHandler}>Add new user</button>
          {showCreateEditModal && <CreateEditModal /> }

          <Pagination />

        </section>
      </main >

      <Footer />
    </>
  )
}

export default App
