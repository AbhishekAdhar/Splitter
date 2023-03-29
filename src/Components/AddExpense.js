import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function
    () {
    return (
        <div>
            <Navbar title="Splitter" />
            <div className="container">
                <div className="card my-4">
                    <div className="card-body">
                        <div className="conatiner">
                            <div className="row">
                                <div className="offset-md-3 col-md-4">
                                    <h2 className="center" >Add Expense Details</h2>
                                    <form>
                                        <div className="form-group mb-3">
                                            <label> Paid by:</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Choose Option</option>
                                                <option value="Abhishek">Abhishek</option>
                                                <option value="Bhukhya">Bhukhya</option>
                                                <option value="Pradeep">Pradeep</option>
                                                <option value="Rahul">Rahul</option>
                                                <option value="Ritik">Ritik</option>
                                                <option value="Ritvik">Ritvik</option>
                                                <option value="Sachin">Sachin</option>
                                                <option value="Samarth">Samarth</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label> Expense Type:</label>
                                            <input type="text" className="form-control" placeholder='Bus Ticket' />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label> Amout:</label>
                                            <input type="text" className="form-control" placeholder='10' />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label> Description: </label>
                                            <input type="text" className="form-control" placeholder='10' />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="mb-3"> people:</label>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-check form-switch mb-2">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label" for="flexSwitchCheckDefault">Abhishek</label>
                                                    </div>
                                                    <div className="form-check form-switch mb-2">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label" for="flexSwitchCheckDefault">Bhukhya</label>
                                                    </div>
                                                    <div className="form-check form-switch mb-2">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label" for="flexSwitchCheckDefault">Pradeep</label>
                                                    </div>
                                                    <div className="form-check form-switch mb-2">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label" for="flexSwitchCheckDefault">Rahul</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-check form-switch mb-2">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label" for="flexSwitchCheckDefault">Ritik</label>
                                                    </div>
                                                    <div className="form-check form-switch mb-2">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label" for="flexSwitchCheckDefault">Ritvik</label>
                                                    </div>
                                                    <div className="form-check form-switch mb-2">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label" for="flexSwitchCheckDefault">Sachin</label>
                                                    </div>
                                                    <div className="form-check form-switch mb-3">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label" for="flexSwitchCheckDefault">Samarth</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-check form-switch mb-2">
                                                    <button className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>

                                        </div>

                                    </form>
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
