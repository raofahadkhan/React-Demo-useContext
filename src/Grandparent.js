
import React, { useContext } from 'react';
import ValueContext from './ValueContext';
function Grandparent(props) {
    let value = useContext(ValueContext)
    return (
       
        <div>
            Grandparent  ValueContext: {value[0]}
          <button onClick={() => {value[1](++value[0])}}>grand parentupdate value</button>
        </div>
    );
}

export default Grandparent;