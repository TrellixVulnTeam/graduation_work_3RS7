import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/all.css';
import '../assets/styles/read_page.css';

const Read = (props) => {
    const idx = useParams().id;
    const [boardRead, setBoardRead] = useState([]);
    const [replyRead, setReplyRead] = useState([]);
    const [writeReply, setWriteReply] = useState([]);
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newContent, setNewContent] = useState('');


    useEffect(() => {
        axios.get(`http://localhost:3001/read/${idx}`).then((response) => {
            setBoardRead(response.data);
            console.log(response);
        })
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:3001/reply/${idx}`).then((response) => {
            setReplyRead(response.data);
            console.log(response.data);
        })
    }, []);

    const submitReply = () => {
        axios.post(`http://localhost:3001/reply/${idx}`,{
            name:newName, pw:newPassword, content:newContent 
        });
        setWriteReply([...writeReply, {board_id:idx, name:newName, pw:newPassword, content:newContent}]);
        window.location.reload();
    }


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
                                {replyRead.map((value) => {
                                        return(
                                            <div className="page_comments">
                                                <div className="page_comments_id">
                                                    <p>{value.name}</p>
                                                </div>
                                                <div className="page_comments_contents">
                                                    <p>{value.content}</p>
                                                </div>
                                                <div className="page_comments_date">
                                                    <p>{value.date}</p>
                                                </div>
                                                <div className="page_comments_button">
                                                    <Link to={`/deletereplypassword/${idx}/${value.id}`}><button className="page_comments_realButton">삭제</button></Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="page_comments_text">
                                    <div>
                                        <div className="page_comments_text_id">
                                            <p>닉네임</p>
                                            <input onChange={(e) => {setNewName(e.target.value)}}></input>
                                        </div>
                                        <div className="page_comments_text_pw">
                                            <p>비밀번호</p>
                                            <input onChange={(e) => {setNewPassword(e.target.value)}}></input>
                                        </div>
                                    </div>
                                    <textarea onChange={(e) => {setNewContent(e.target.value)}}></textarea>
                                    <Link to={`/read/${idx}`} style={{textDecoration:'none'}}><button className="page_comments_text_button" onClick={submitReply}>입력</button></Link>
                                </div>
                            </div>
                        </article>
                    </form>
        </>
    ) 
}

export default Read;