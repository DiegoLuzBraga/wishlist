export const getProducts = () => {
  const url = process.env.API_URL || "";
  
  return fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    mode: "cors",
  });
};
