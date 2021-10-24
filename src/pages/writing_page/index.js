import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/all.css';
import '../assets/styles/writing_page.css';
import PasswordModal from '../passwordModal';

const WritingPage = () => {

    const replies = [
        {reply_no:5, con_num:1, reply_id:'ㅇㅇ', reply_content:'블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라', reply_date:'2021.10.07'},
        {reply_no:4, con_num:1, reply_id:'아이디 입니다.', reply_content:'블라블라블라블라블라블라', reply_date:'2021.10.07'},
        {reply_no:3, con_num:1, reply_id:'ㅇㅇ', reply_content:'블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라', reply_date:'2021.10.07'},
        {reply_no:2, con_num:1, reply_id:'아이디 입니다.', reply_content:'블라블라블라블라블라블라', reply_date:'2021.10.07'},
        {reply_no:1, con_num:1, reply_id:'ㅇㅇ', reply_content:'블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라', reply_date:'2021.10.07'}
    ];

    const [modalSee, setModalSee] = useState(false);

    const modalOpen = (e) => {
        e.preventDefault();
        setModalSee(true)
    }

    const modalClose = () => {
        setModalSee(false);
        console.log(setModalSee);
    }

    return(
        <>
            <form className="writing_page">
                <article className="writing_page_start">
                    <div className="page_top">
                        <h4>제목제목제목제목</h4>
                        <p>작성자 : ㅇㅇ&nbsp;&nbsp;|&nbsp;&nbsp;작성일 : 2021.10.07</p>
                    </div>
                    <div className="page_content">
                        <p>아아아아아</p>
                    </div>
                    <div className="page_comments_top">
                        <p>댓글 5개</p>
                    </div>
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
                                            <button onClick={modalOpen}>삭제</button>
                                            {
                                                modalSee && <PasswordModal
                                                visible={modalSee}
                                                closable={true}
                                                maskClosable={true}
                                                onClose={modalClose}>
                                                </PasswordModal>
                                            }
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
                                {/* <div className="page_comments_text_pw">
                                    <p>비밀번호</p>
                                    <input></input>
                                </div> */}
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

export default WritingPage;