import React, { useEffect, useState } from 'react'
import './App.css';
import Table from "./components/Table";
import Pagination from './components/Pagination'
import axios from "axios";

function App() {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage] = useState(5)

    const lastPostIndex = currentPage * rowsPerPage
    const firstPostIndex = lastPostIndex - rowsPerPage
    const currentPosts = data.slice(firstPostIndex, lastPostIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        (async () => {
            const usersData = await axios.get("https://jsonplaceholder.typicode.com/users")
            setData(usersData.data)
        })()

    }, [])
  return (
    <div className="App">
      <Table data={currentPosts} />
        <Pagination rowsPerPage={rowsPerPage} totalRows={data.length} paginate={paginate} currentPage={currentPage}/>
    </div>
  );
}

export default App;
