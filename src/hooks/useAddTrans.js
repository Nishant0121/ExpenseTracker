import{addDoc,collection,serverTimestamp}from "firebase/firestore";
import {db} from "../config/firebaseconfig"
import {useGetUserInfo} from "../hooks/useGetUserinfo"

export const useAddTrans=()=>{
    const transref= collection(db,"Trans");
    const {userid} = useGetUserInfo();

    const addtrans=async({title,amount,type})=>{
        await addDoc(transref,{
            userid,
            title,
            amount,
            type,
            createAt:serverTimestamp(),
        });
    };
    return {addtrans};
}