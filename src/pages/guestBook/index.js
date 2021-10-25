import React , {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/all.css';
import '../assets/styles/guestbook.css';
import { Table, CardHeader } from "reactstrap";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import PasswordModal from "../passwordModal";
// import DeletePasswordModal from "../deletePasswordModal";
import axios from 'axios';
import Pagination from "../pagination";
import { paginate } from "../pagination/paginate";

const GuestBook = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [boardList, setBoardList] = useState([]);
    const [deletePassword, setDeletePassword] = useState('');

    const openModal = (e) => {
        e.preventDefault();
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    useEffect(() => {
        axios.get('http://localhost:3001/guestbook').then((response) => {
            setBoardList(response.data);
        })
    }, []);

    // const deleteBoard = (idx) => {
    //     axios.delete(`http://localhost:3001/delete`,{id:idx, pw:deletePassword});
    //     setDeletePassword("");
    // };

    const deleteBoard = (idx) => {
        axios.delete(`http://localhost:3001/delete/${idx}`); 
    };

    const getGuestBooks = () => { //방명록 정보를 반환하는 함수
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
        return guestbooks;
    }
    

    const [guestbooks, setGuestbooks] = useState({ //방명록 정보를 담는 state
        data: getGuestBooks(),
        pageSize: 5, //한 페이지에 보여줄 아이템(방명록) 개수
        currentPage:1 //현재 활성화된 페이지 위치
    });

    const handlePageChange = (page) => {
        setGuestbooks({...guestbooks, currentPage:page});
    }

    const {data, pageSize, currentPage} = guestbooks;
    const pagedGuestbooks = paginate (data, currentPage, pageSize); //페이지 별로 아이템이 속한 배열을 얻어옴

    const {length : count} = guestbooks.data;
    if(count === 0)
        return <p>방명록 정보가 없습니다.</p>;
    
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
                                    <th className="table_head">닉네임</th>
                                    <th className="table_head">제목</th>
                                    <th className="table_head">작성일</th>
                                    <th className="table_head">조회수</th>
                                    <th className="table_head">수정</th>
                                    <th className="table_head">삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {boardList.map((value, key) => {
                                        return(
                                            <tr key={key}>
                                                <th className="table_body"><input type="checkbox"></input></th>
                                                <td className="table_body">{value.name}</td>
                                                <Link to={"/read"} style={{textDecoration:'none'}}><td className="table_body">{value.title}</td></Link>
                                                <td className="table_body">{value.date}</td>
                                                <td className="table_body">{value.hit}</td>
                                                <td>
                                                    <Link to={"/writingupdate"}><button className="table_button">수정</button></Link>
                                                    {/* <button className="table_button" onClick={openModal}>수정</button> */}
                                                    {/* {
                                                        modalVisible && <PasswordModal
                                                        visible={modalVisible}
                                                        closable={true}
                                                        maskClosable={true}
                                                        onClose={closeModal}>
                                                        </PasswordModal>
                                                    } */}
                                                </td>
                                                <td>
                                                    <button className="table_button" onClick={() => {deleteBoard(value.id)}}>삭제</button>
                                                    {/* <button className="table_button" onClick={openModal}>삭제</button>
                                                    {
                                                        modalVisible && <PasswordModal
                                                        visible={modalVisible}
                                                        closable={true}
                                                        maskClosable={true}
                                                        onClose={closeModal}>
                                                        </PasswordModal>
                                                    } */}
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
                                    <td><Link to={"/writing"} style={{textDecoration:'none'}}><button className="write_button">글쓰기</button></Link></td>
                                </tr>
                            </tbody>
                        </Table>
                        <Pagination
                        pageSize={guestbooks.pageSize}
                        itemsCount = {count}
                        currentPage = {currentPage}
                        onPageChange = {handlePageChange}
                        />
                    </Row>
                </CardHeader>
            </Container>
        </>
    )
}

export default GuestBook;