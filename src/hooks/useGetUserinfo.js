export const useGetUserInfo=()=>{
    const {name ,profilephoto ,userid,isauth}=
        JSON.parse(localStorage.getItem("auth"))|| {};

        return{name,profilephoto,userid,isauth}
}