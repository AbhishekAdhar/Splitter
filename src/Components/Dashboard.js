import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function
    () {
    return (
        <div>
            <Navbar title="Splitter" />
            <div className="container">
                <div className="card my-5">
                    <div className="card-body">
                        <div className="container my-5">
                            <div className="row">
                                <div className="offset-md-1 col-md-4">
                                    <div className="card" >
                                        <div className="card-body">
                                            <h5 className="card-title">See Expense</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="offset-md-1 col-md-4">
                                    <div className="card" >
                                        <div className="card-body">
                                            <h5 className="card-title">Add Expense</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <Link className="btn btn-primary" to="/AddExpense">AddExpense</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
