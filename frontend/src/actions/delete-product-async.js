import { request } from '../utils/request';

export const deleteProductAsync = (id) => async () => await request(`/api/products/editing/${id}`, 'DELETE');
