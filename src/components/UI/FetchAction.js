import React, { useState } from "react";

const FetchAction = ({ fetchTarget, title, onDataFetched }) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllFromTarget = async () => {
    setIsLoading(true);
    const reqs = fetchTarget.map((url) => fetch(url));
    const resp = await Promise.all(reqs);
    const promises = resp.map((response) => response.json());
    const response = await Promise.all(promises);
    // console.log(response);
    onDataFetched(response);
    setIsLoading(false);
  };
  return (
    <button
      type="button"
      disabled={isLoading}
      className="btn btn-sm btn-light mr-2"
      onClick={fetchAllFromTarget}
    >
      {title}
    </button>
  );
};

export default FetchAction;
