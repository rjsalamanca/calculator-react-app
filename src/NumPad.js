import React from 'react';

// import PropTypes from 'prop-types';

const NumPad = props => {
    const { numberClick, clear } = props;
    const numPad = [1,2,3,4,5,6,7,8,9,0,'.'].map((button, ind) => 
            <div key={ind} onClick={(e) => numberClick(button)}>{button}</div>
        );
    return(                        
        <div className="leftPanel">
            <div className="numbers">
                {numPad.slice(6,9)}
            </div>
            <div className="numbers">
                {numPad.slice(3,6)}
            </div>
            <div className="numbers">
                {numPad.slice(0,3)}
            </div>
            <div className="numbers">
                {numPad.slice(9,11)}
                <div onClick={(e) => clear()}>C</div>
            </div>
        </div>
    );
}

export default NumPad; 