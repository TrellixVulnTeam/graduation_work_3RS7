import React, {useState} from 'react';
import axios from 'axios';
import '../assets/styles/all.css';
import '../assets/styles/updatePasswordCheck.css';

const UpdatePasswordCheck = () => {
    const [password, setPassword] = useState("");

    const [pwStatus,setPwStatus] = useState("");

    const checkPassword = (idx) => {
        axios.post(`http://localhost:3001/passwordcheck/${idx}`, {
            id:idx,
            pw:password
        }).then((response) => {
            console.log(response.data.message);
            if(response.data.message) {
                setPwStatus(response.data.message);
            }
        });
    };

    return(
        <>
            <div className="checkAll">
                <div className="check_password">
                    <h4>비밀번호 입력 :</h4>
                    <input type="password" onChange={(e)=> {setPassword(e.target.value)}}></input>
                    <button onClick={checkPassword}>입력</button>
                </div>
                <h1>{pwStatus}</h1>
            </div>
        </>
    )
}

export default UpdatePasswordCheck;