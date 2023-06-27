export const fakeApi = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  return res.json();
};
