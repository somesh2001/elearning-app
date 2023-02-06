import React, { useState } from "react";

const BatchContext = React.createContext({
  batchDetailList: [],
});

export const BatchContextProvider = (props) => {
  const [bacthDetailList, setBacthDetailList] = useState();

  const batchDetailHandler = (batchData) => {
    setBacthDetailList(batchData);
  };

  const ContextValue = {
    batchDetailHandler,
  };

  return (
    <BatchContext.Provider value={ContextValue}>
      {props.children}
    </BatchContext.Provider>
  );
};
export default BatchContext;
