import React from "react";


const Travel = ({title, country, image, start,end, price, description, places, amount, setTrips, id }) => {

    const clickHandler = (e) => {
        e.preventDefault();
        setTrips(prev => [...prev, {country, price, image, amount, id}]);
    }

    return(
        <div className="travel-box">
            <h2>{title}</h2>
            <img src={process.env.PUBLIC_URL + image} alt="" className="travel-image"/>
            <h3>{country}</h3>
            <p>Cena: {price}zł</p>
            {/*<p>{start}</p>
            <p>{end}</p>*/}
            <p>{description}</p>
            {/*<p>Liczba miejsc: {places}</p>*/}
            <div className="button-all">
                <button
                    className="buy-button"
                    onClick={clickHandler}
                >
                        Kup
                </button>
                <div className="plus-icon"></div>
            </div>
        </div>
    );
}

export default Travel;