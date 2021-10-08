import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/all.css';
import '../assets/styles/writing.css';

const Writing = () => {
    return(
        <>
            <form className="writing">
                <article className="writing_start">
                    <div className="title">
                        <h1>방명록 등록하기</h1>
                    </div>
                    <div className="writing_nickname">
                        <h5>닉네임 :</h5>
                        <input type="text"></input>
                    </div>
                    <div className="writing_password">
                        <h5>비밀번호 :</h5>
                        <input type="text"></input>
                    </div>
                    <div className="writing_title">
                        <h5>제목 :</h5>
                        <input type="text"></input>
                    </div>
                    <div className="writing_content">
                        <textarea></textarea>
                        <Link to={"/guestbook"} style={{textDecoration:'none'}}><button type="input" className="registration_btn">등록하기</button></Link>
                    </div>
                </article>
                
            </form>
        </>
    )
}

export default Writing;