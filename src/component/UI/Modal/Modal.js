import React from 'react'
import './Modal.css'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Modal/Backdrop/Backdrop'

const Modal = (props) => {
    return (
        <Auxiliary> 
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className ={'Modal'}
            style={{
                transform:props.show ? 'translateY(0)' : 'translate(-100vh)',
                opacity : props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
        </Auxiliary>
    )
}
export default Modal;