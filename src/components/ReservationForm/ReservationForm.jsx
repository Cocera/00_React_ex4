import React, { useState } from "react";

export const ReservationForm = () => {

    const initialValue = {
        name: "",
        email: ""
    };

    const [data, setData] = useState(initialValue);

    const clearForm = () => setData(initialValue);

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Test sending data function
        console.log(`Mi nombre es ${data.name} y mi mail ${data.email}`);

        clearForm();
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
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
            <button type="submit">Enviar</button>
            <button type="delete" onClick={() => clearForm}>Enviar</button>
            </form>
        </>
    );
};

export default ReservationForm;