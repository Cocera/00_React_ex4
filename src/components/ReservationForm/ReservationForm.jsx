import React, { useState } from "react";

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
                <textarea rows="5" name="comment" value={data.comment} onChange={handleInputChange}>Reservation comment</textarea>
                <button type="submit" onClick={handleSubmit}>Enviar</button>
                <button type="delete" onClick={clearForm}>Delete</button>
            </form>
        </>
    );
};

export default ReservationForm;