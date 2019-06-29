import React from 'react';

import PropTypes from 'prop-types';

const Operators = props => {
    const { operatorClick } = props;
    return(                        
        <div className="operators">
            {['+','-','*','/'].map((operator,ind) =>
                <div key={ind} onClick={(e) => operatorClick(operator)}>
                    {operator}
                </div>
            )}
        </div>
    );
}

export default Operators; 

Operators.propTypes = {
    operatorClick: PropTypes.func
}