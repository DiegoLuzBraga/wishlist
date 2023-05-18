export const getProducts = () => {
  const url = process.env.REACT_APP_API_URL || "";
  
  return fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    mode: "cors",
  });
};
