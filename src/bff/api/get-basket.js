export const getBasket = async (userId) => fetch(`http://localhost:3000/users/${userId}`).then((loadedUser) => loadedUser.json());
