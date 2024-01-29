import {signOut} from "firebase/auth";
import {auth} from "../../config/firebaseconfig";
import {useNavigate} from "react-router-dom";
import{useGetUserInfo}from "../../hooks/useGetUserinfo";
import { useGetTrans} from "../../hooks/useGetTrans";
import "./home.css";



export const Home = () => {

    const navigate = useNavigate();
    const {name}=useGetUserInfo();
    const {trans,transtotal} = useGetTrans();
    const {total,totalExpense,totalIncome} = transtotal;


    const handleLogout = async() => {
      await signOut(auth);
      localStorage.clear();
      navigate("/");    
    }


    const handelAddTrans = async() => {
      navigate("/addtrans");    
    }


    return (
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <h2 className="navbar-brand">Home</h2>
            <form className="d-flex" role="search">
              <h3>{name}</h3>
            </form>
          </div>
        </nav>
        <div className="allcontent">
          <div className="info">
              <div className="card text-bg-info m-3">
                <div className="card-header h5">Balence</div>
                <div className="card-body">
                <div className="card-title h3">{total >=0 ? <p>+{total}</p>:<p>{total}</p>}</div>
                </div>
              </div>
              <div className="in_ex p-0 d-flex m-3">
                <div className="card text-bg-success  m-1 p-1">
                  <div className="card-header h5">Income</div>
                  <div className="card-body">
                  <div className="card-title h3"><p>{totalIncome}</p></div>
                  </div>
                </div>
                <div className="card text-bg-danger  m-1 p-1">
                  <div className="card-header h5">Expense</div>
                  <div className="card-body">
                  <div className="card-title h3"><p>{totalExpense}</p></div>
                  </div>
                </div>
              </div> 
          </div>

          <div className="allhis" >
            <h3>History</h3>
            <ul className="history list-group">
              {trans.map((trans) => {
                const { id, type, amount, title } = trans;
                return (
                  <li key={id} className="list-group-item listi d-flex">
                    <h4>{title}</h4>
                    <h4>{amount}</h4>
                    <h5>{type}</h5>
                    
                  </li>
                );
              })}
            </ul>
          </div>
          <footer className="buttons">
            <button className="btn btn btn-outline-danger " onClick={handleLogout}>logOut</button>
            <button className="btn btn btn-outline-info" onClick={handelAddTrans}>Add Trans</button>
          </footer>
        </div>
      </div>
    );
  };