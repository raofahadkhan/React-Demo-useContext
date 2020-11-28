import React from 'react';
import Child from './Child';
import Child2 from './Child2';
function Parent(props) {
    return (
        <div>
            <Child num={props.num}/>   
            <Child2/>
        </div>
    );
}

export default Parent;