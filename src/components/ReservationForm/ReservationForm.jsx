const ReservationForm = () => {
    return(
        <>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="name"
                onChange={handleInputChange}
                name="name"
            />
            <input
                type="email"
                placeholder="email"
                onChange={handleInputChange}
                name="email"
            />
            <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default ReservationForm;