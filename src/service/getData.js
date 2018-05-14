import fetch from '../config/fetch';
export const getOrderList = (urlName) => fetch('/api/'+urlName);