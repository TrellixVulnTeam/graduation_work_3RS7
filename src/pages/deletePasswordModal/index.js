import React, { useEffect, useState } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../assets/styles/passwordModal.css';
import CloseButton from '../deletePasswordModal/closeButton';

const DeletePasswordModal = ({className, onClose, maskClosable, closable, visible, children}) => {
    const [boardList, setBoardList] = useState([]);
    const [deletePassword, setDeletePassword] = useState('');

    const deleteBoard = (idx) => {
        axios.delete(`http://localhost:3001/delete`,{id:idx, pw:deletePassword});
        setDeletePassword("");
    };

    useEffect(() => {
        axios.get('http://localhost:3001/guestbook').then((response) => {
            setBoardList(response.data);
        })
    }, []);

    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    }

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }

    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
        return () => {
          const scrollY = document.body.style.top
          document.body.style.cssText = `position: ""; top: "";`
          window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
      }, [])
    
    return(
        <>
            {boardList.map((value, key) => {
                <>
                    <ModalOverlay visible={visible} key={key}/>
                    <ModalWrapper
                    className={className}
                    onClick={maskClosable ? onMaskClick : null}
                    tabIndex="-1"
                    visible={visible}>
                        <ModalInner tabIndex="0" className="modal-inner">
                            비밀번호 :<input type="password" className="passwordInput" onChange={(e) => {setDeletePassword(e.target.value)}}></input>
                            <button type="input" className="inputBtn" onClick={()=>{deleteBoard(value.id)}}>입력</button>
                            {closable && <CloseButton className="modal-close" onClick={close} />}
                            {children}
                        </ModalInner>
                    </ModalWrapper>
                </>
            })
            }
        </>
    )
}

DeletePasswordModal.defaultProps = {
    closable: true,
    maskClosable: true,
    visible : false
}

DeletePasswordModal.propTypes = {
    visible : PropTypes.bool,
}

const ModalWrapper = styled.div`
box-sizing : border-box;
display: ${(props) => (props.visible ? 'block' : 'none')};
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1000;
overflow: auto;
outline: 0;
`

const ModalOverlay = styled.div`
box-sizing: border-box;
display: ${(props) => (props.visible ? 'block' : 'none')};
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: rgba(0, 0, 0, 0.6);
z-index: 999;
`

const ModalInner = styled.div`
box-sizing : border-box;
position: relative;
box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
background-color: #83A0D2;
color:#fff;
border-radius: 10px;
width: 360px;
max-width: 480px;
top: 50%;
transform: translateY(-50%);
margin: 0 auto;
padding: 40px 20px;
`

export default DeletePasswordModal;