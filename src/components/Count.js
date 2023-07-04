import React from "react";

const Count = ({count, bgColor}) =>{

    const progress = {width: `${count}%`};

    return(
        <>
            <p className="h1">{count}%</p>

            <div className="progress">
                <div className="progress-bar progress-bar-striped" role="progressbar" style={progress}>
                </div>
            </div>
        </>
    )
}

export default Count