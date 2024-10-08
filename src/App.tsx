import { ToastContainer } from "react-toastify";
import { PasswordGenerator } from "./components/PasswordGenerator";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <div className="custom-pattern font-poppins flex justify-center items-center h-screen bg-gray-950 text-white">
        <PasswordGenerator />
      </div>
      <ToastContainer />
    </>
  )
}

