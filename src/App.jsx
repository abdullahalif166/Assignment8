import { useState } from 'react'
import './App.css'
import Blog from './components/Blog/Blog'
import BlogQA from './components/BlogQA/BlogQA'
import Header from './components/Header/Header'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <BlogQA></BlogQA>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>

  )
}

export default App
