import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/all.css';
import '../assets/styles/read_page.css';

const Read = (props) => {
    const idx = useParams().id;
    const [boardRead, setBoardRead] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/read/${idx}`).then((response) => {
            setBoardRead(response.data);
            console.log(response);
        })
    }, []);

    const deleteBoard = (idx) => {
        axios.delete(`http://localhost:3001/delete/${idx}`); 
    };

    const readBoard = (idx) => {
        axios.get(`http://localhost:3001/read/${idx}`);
        console.log(idx, "<== guestbook (아이디 확인)");
    }

    const replies = [
        {reply_no:5, con_num:1, reply_id:'ㅇㅇ', reply_content:'블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라', reply_date:'2021-10-07 20:06:55'},
        {reply_no:4, con_num:1, reply_id:'아이디 입니다.', reply_content:'블라블라블라블라블라블라', reply_date:'2021-10-07 20:06:55'},
        {reply_no:3, con_num:1, reply_id:'ㅇㅇ', reply_content:'블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라', reply_date:'2021-10-07 20:06:55'},
        {reply_no:2, con_num:1, reply_id:'아이디 입니다.', reply_content:'블라블라블라블라블라블라', reply_date:'2021-10-07 20:06:55'},
        {reply_no:1, con_num:1, reply_id:'ㅇㅇ', reply_content:'블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라', reply_date:'2021-10-07 20:06:55'}
    ];

    return(
        
        <>
                    <form className="read_page" method="post">
                        <article className="read_page_start">
                            {boardRead.map((value) => {
                                return(
                                    <>
                                        <div className="page_top">
                                            <h4>{value.title}</h4>
                                            <p>작성자 : {value.name}&nbsp;&nbsp;|&nbsp;&nbsp;작성일 : {value.date}&nbsp;&nbsp;|&nbsp;&nbsp;조회수 : {value.hit}</p>
                                        </div>
                                        <div className="page_content">
                                            <p>{value.content}</p>
                                        </div>
                                        <div className="page_comments_top">
                                            <h5>댓글</h5>
                                            <Link to={`/deletepasswordcheck/${value.id}`}><button className="page_comments_top_button">삭제</button></Link>
                                            <Link to={`/updatepasswordcheck/${value.id}`}><button className="page_comments_top_button">수정</button></Link>
                                        </div>
                                    </>
                                )
                            })}
                            <div className="page_comments_all">
                                {replies.map((reply, key) => {
                                    const{reply_id, reply_content, reply_date} = reply;
                                        return(
                                            <div className="page_comments" key={key}>
                                                <div className="page_comments_id">
                                                    <p>{reply_id}</p>
                                                </div>
                                                <div className="page_comments_contents">
                                                    <p>{reply_content}</p>
                                                </div>
                                                <div className="page_comments_date">
                                                    <p>{reply_date}</p>
                                                </div>
                                                <div className="page_comments_button">
                                                    <Link to={'/passwordcheck'}><button className="page_comments_realButton">삭제</button></Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="page_comments_text">
                                    <div>
                                        <div className="page_comments_text_id">
                                            <p>닉네임</p>
                                            <input></input>
                                        </div>
                                        <div className="page_comments_text_pw">
                                            <p>비밀번호</p>
                                            <input></input>
                                        </div>
                                    </div>
                                    <textarea></textarea>
                                    <button>입력</button>
                                </div>
                            </div>
                        </article>
                    </form>
        </>
    ) 
}

export default Read;