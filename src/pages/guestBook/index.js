import React , {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/all.css';
import '../assets/styles/guestbook.css';
import { Table, CardHeader } from "reactstrap";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PasswordModal from "../passwordModal";

const GuestBook = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    const guestbooks = [
        {guestbook_no: 10, guestbook_id:'ㅇㅇ', guestbook_password : '1234', guestbook_title: '잘부탁드려요', guestbook_content:'아아아아아', guestbook_date:'21.09.26', guestbook_hit:1},
        {guestbook_no: 9, guestbook_id:'ㅇㅇ', guestbook_password : '1234', guestbook_title: '만나서 반갑습니다', guestbook_content:'아아아아아', guestbook_date:'21.09.26', guestbook_hit:2},
        {guestbook_no: 8, guestbook_id:'ㅇㅇ', guestbook_password : '1234', guestbook_title: '안녕하세요', guestbook_content:'아아아아아', guestbook_date:'21.09.26', guestbook_hit:3},
        {guestbook_no: 7, guestbook_id:'ㅇㅇ', guestbook_password : '1234', guestbook_title: '잘부탁드려요', guestbook_content:'아아아아아', guestbook_date:'21.09.26', guestbook_hit:4},
        {guestbook_no: 6, guestbook_id:'ㅇㅇ', guestbook_password : '1234', guestbook_title: '만나서 반갑습니다', guestbook_content:'아아아아아', guestbook_date:'21.09.26', guestbook_hit:5},
        {guestbook_no: 5, guestbook_id:'ㅇㅇ', guestbook_password : '1234', guestbook_title: '안녕하세요', guestbook_content:'아아아아아', guestbook_date:'21.09.26', guestbook_hit:6},
        {guestbook_no: 4, guestbook_id:'ㅇㅇ', guestbook_password : '1234', guestbook_title: '잘부탁드려요', guestbook_content:'아아아아아', guestbook_date:'21.09.26', guestbook_hit:7},
        {guestbook_no: 3, guestbook_id:'ㅇㅇ', guestbook_password : '1234', guestbook_title: '만나서 반갑습니다', guestbook_content:'아아아아아', guestbook_date:'21.09.26', guestbook_hit:8},
        {guestbook_no: 2, guestbook_id:'ㅇㅇ', guestbook_password : '1234', guestbook_title: '안녕하세요', guestbook_content:'아아아아아', guestbook_date:'21.09.26', guestbook_hit:9},
        {guestbook_no: 1, guestbook_id:'ㅇㅇ', guestbook_password : '1234', guestbook_title: '잘부탁드려요', guestbook_content:'아아아아아', guestbook_date:'21.09.26', guestbook_hit:10}
    ]

    return(
        <>
            <Container className="guestbook mt-5 mb-5">
                <CardHeader className="guestbook_card">
                    <Row>
                        <h1>방명록</h1>
                        <Table className="guestbook_table mt-5">
                            <thead>
                                <tr>
                                    <th className="table_head"><input type="checkbox"></input></th>
                                    <th className="table_head">번호</th>
                                    <th className="table_head">닉네임</th>
                                    <th className="table_head">제목</th>
                                    <th className="table_head">작성일</th>
                                    <th className="table_head">조회수</th>
                                    <th className="table_head">수정</th>
                                    <th className="table_head">삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {guestbooks.map((guestbook, key) => {
                                        const {guestbook_no, guestbook_id, guestbook_title, guestbook_date, guestbook_hit} = guestbook;
                                        return(
                                            <tr key={key}>
                                                <th className="table_body"><input type="checkbox"></input></th>
                                                <td className="table_body">{guestbook_no}</td>
                                                <td className="table_body">{guestbook_id}</td>
                                                <Link to={"/writingpage"} style={{textDecoration:'none'}}><td className="table_body">{guestbook_title}</td></Link>
                                                <td className="table_body">{guestbook_date}</td>
                                                <td className="table_body">{guestbook_hit}</td>
                                                <td><button className="table_button" onClick={openModal}>수정</button>
                                                    {
                                                        modalVisible && <PasswordModal
                                                        visible={modalVisible}
                                                        closable={true}
                                                        maskClosable={true}
                                                        onClose={closeModal}>
                                                        </PasswordModal>
                                                    }
                                                </td>
                                                <td><button className="table_button" onClick={openModal}>삭제</button>
                                                    {
                                                        modalVisible && <PasswordModal
                                                        visible={modalVisible}
                                                        closable={true}
                                                        maskClosable={true}
                                                        onClose={closeModal}>
                                                        </PasswordModal>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })
                                    }
                                <tr className="table_bottom">
                                    <th className="table_body"></th>
                                    <td className="table_body"></td>
                                    <td className="table_body"></td>
                                    <td className="table_body"></td>
                                    <td className="table_body"></td>
                                    <td className="table_body"></td>
                                    <td className="table_body"></td>
                                    <td><Link to={"/writing"} style={{textDecoration:'none'}}><button className="write_button">글쓰기</button></Link></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </CardHeader>
            </Container>
        </>
    )
}

export default GuestBook;