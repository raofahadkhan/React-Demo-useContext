import React, { useContext } from 'react';
// every context has two things provider and consumers
// first we have to create a context
// then we have to provide it a value with provider method
// after we can use it in our components but we have to import 
// them in the component file by using useContext method

const ValueContext = React.createContext(45, () => {});
 
export default ValueContext;