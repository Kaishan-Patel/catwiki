import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";

const Header = () => {
    const [data, setData] = useState();

    useEffect(async () => {
        const response = await fetch(`/api/2ik`);
        const result = await response.json();
        setData(result.url);
    }, []);

    return (
        <div className="Header">
            {data ? (
                <img className="HeaderImage" src={data} alt="Cat" />
            ) : (
                <img className="HeaderImage" src={logo} alt="logo" />
            )}
        </div>
    );
};

export default Header;
