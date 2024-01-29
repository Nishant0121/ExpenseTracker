import {useState,useEffect} from "react";
import {db} from "../config/firebaseconfig";
import {collection,query,orderBy,onSnapshot, where} from "firebase/firestore";
import {useGetUserInfo} from "../hooks/useGetUserinfo"



export const useGetTrans =()=>{
    const [trans,setTrans]=useState([]);
    const [transtotal,settranstotal]=useState({
        total:0,
        totalIncome:0,
        totalExpense:0
    });

    const transref= collection(db,"Trans");
    const {userid}=useGetUserInfo();


    const getTrans=async()=>{
        let document;
        try{
            const queryTrans= query(transref,orderBy("createAt"),where("userid","==",userid));
            document=onSnapshot(queryTrans,(snapshot)=>{
                let docs=[];
                let totalIncome=0;
                let totalExpense=0;

                snapshot.forEach((doc)=>{
                    const data =doc.data();
                    const id =doc.id;

                    docs.push({id,...data});

                    if(data.type==="income"){
                        parseFloat(totalIncome);
                        let amt = parseFloat(data.amount);
                        totalIncome=totalIncome+amt;
                    }else{
                        let amt = parseFloat(data.amount);
                        totalExpense+=amt;
                    }

                    // console.log(totalExpense,totalIncome);
                });
                setTrans(docs);

                let total=totalIncome-totalExpense;
                settranstotal({
                    total,
                    totalIncome,
                    totalExpense
                });
            });
        }
        catch(err){
            // console.log(err);
        }

        return ()=>document();
    };

    useEffect(()=>{
        getTrans();
    },);

    return {trans,transtotal};
};