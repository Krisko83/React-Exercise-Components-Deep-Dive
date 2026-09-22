import { useEffect, useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Pagination from "./components/Pagination.jsx";
import UserList from "./components/UserList.jsx";
import './styles.css'
import UserSearch from "./components/UserSearch.jsx";

function App() {
  const [users, setUsers] = useState([]);


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


  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">

          <UserSearch />

          <UserList users={users} />

          <button className="btn-add btn">Add new user</button>

          <Pagination />
        </section>
      </main >

      <Footer />
    </>
  )
}

export default App
