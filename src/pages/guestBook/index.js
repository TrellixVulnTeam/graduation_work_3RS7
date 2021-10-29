import React , {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/all.css';
import '../assets/styles/guestbook.css';
import { Table, CardHeader } from "reactstrap";
import { Row, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Pagination from "../pagination";
import { paginate } from "../pagination/paginate";

const GuestBook = () => {
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:3001/guestbook').then((response) => {
            setBoardList(response.data);
            console.log("GuestBook => ",response.data);
        })
    }, []);

    const readBoard = (idx) => {
        axios.get(`http://localhost:3001/read/${idx}`);
        console.log(idx, "<== guestbook (아이디 확인)");
    }
    
    return(
        <>
            <Container className="guestbook mt-5 mb-5">
                <CardHeader className="guestbook_card">
                    <Row>
                        <h1>방명록</h1>
                        <Table className="guestbook_table mt-5">
                            <thead>
                                <tr>
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
                                                <th className="table_body">{value.name}</th>
                                                <Link to={{ pathname: `/read/${value.id}`}} style={{textDecoration:'none'}}><td className="table_body" onClick={()=> {readBoard(value.id)}}>{value.title}</td></Link>
                                                <td className="table_body">{value.date}</td>
                                                <td className="table_body">{value.hit}</td>
                                                <td>
                                                    <Link to={`/updatepasswordcheck/${value.id}`}><button className="table_button">수정</button></Link>
                                                </td>
                                                <td>
                                                    <Link to={`/deletepasswordcheck/${value.id}`}><button className="table_button">삭제</button></Link>
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