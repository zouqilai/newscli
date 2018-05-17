import fetch from '../config/fetch';
export const getOrderList = (urlName) => fetch('/api/'+urlName);
export const getDetail = (fid,id) => fetch('/api/detail',{
	fid:fid,
	id:id
});