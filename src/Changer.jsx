import React from 'react';
import moon from "./assets/1669857.png"
import sun from "./assets/qTBoEaz7c.png"
const Changer = ({themeHandler,theme}) => {
    return (
        <div style={theme} id="changer">
            <label htmlFor="changeInput">
                <img src={sun} className="sun "alt=""/>
                <img className="moon" src={moon} alt=""/>
                <input id="changeInput" onClick={themeHandler} type="checkbox"/>

                <div className="circle"></div>

            </label>

        </div>
    );
}

export default Changer;
