import React, { useState } from "react";
import './ReservationForm.css';

const arrInfoReservations = [];

export const ReservationForm = () => {
    
    const initialValue = {
        name: "",
        email: "",
        tlf: "",
        date: "",
        comment: ""
    };

    const [data, setData] = useState(initialValue);

    const clearForm = (e) => {
        e.preventDefault();
        setData(initialValue)
    };

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        arrInfoReservations.push({...data, id_reservation: crypto.randomUUID()});
        localStorage.setItem('dataForm', JSON.stringify(arrInfoReservations));
        setData(initialValue);
    };

    return(
        <>
            <form>
                <h2>Reserve a table with us!</h2>
                <input
                    type="text"
                    placeholder="name"
                    onChange={handleInputChange}
                    name="name"
                    value={data.name}
                />
                <input
                    type="email"
                    placeholder="email"
                    onChange={handleInputChange}
                    name="email"
                    value={data.email}
                />
                <input
                    type="tel"
                    placeholder="tlf."
                    onChange={handleInputChange}
                    name="tlf"
                    value={data.tlf}
                />
                <input
                    type="datetime-local"
                    placeholder="date"
                    onChange={handleInputChange}
                    name="date"
                    value={data.date}
                />
                <label htmlFor="comment">Write a comment for your reservation:</label>
                <textarea rows="4" name="comment" value={data.comment} onChange={handleInputChange} />
                <div className="formButtons">
                    <button type="submit" onClick={handleSubmit}>Send</button>
                    <button type="delete" onClick={clearForm}>Delete</button>
                </div>
            </form>
        </>
    );
};

export default ReservationForm;