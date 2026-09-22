import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Pagination from "./components/Pagination.jsx";
import UserList from "./components/UserList.jsx";
import './styles.css'

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <UserList />

          <button className="btn-add btn">Add new user</button>

          <Pagination />
        </section>
      </main >
      <Footer />
    </>
  )
}

export default App
