let cookie=()=>{
	return{
		setCookie(ckey,cvalue){//设置cookie
			window.localStorage.setItem(ckey, cvalue);
		},
		getCookie(key){//获取cookie
			return window.localStorage.getItem(key);
		}
	}
}
export{
	cookie
};