import React from 'react'
import './admin.css'
import Sidebar from './Sidebar/Sidebar'
const AdminPanel = () => {
    return (
        <>
            <Sidebar/>
            <div className="container mt-5">
            <div className="d-flex justify-content-center danger"  ><h1 color="white">ADMIN PANEL</h1></div>

            </div>
        </>
    )
}

export default AdminPanel
