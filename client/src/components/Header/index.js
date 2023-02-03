import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";

const Header = () => {
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/2ik`);
            const result = await response.json();
            setData(result.url);
        }
        fetchData();
    }, []);

    return (
        <div className="Header">
            {data ? (
                <img className="HeaderImage" src={data} alt="cat" />
            ) : (
                <img className="HeaderImage" src={logo} alt="logo" />
            )}
        </div>
    );
};

export default Header;
