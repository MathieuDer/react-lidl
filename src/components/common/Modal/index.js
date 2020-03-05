import React from 'react'
import PropTypes from 'prop-types'

import { FiXCircle } from 'react-icons/fi'

import styled from 'styled-components'

const Modal = props => {
  const { width, title, display, children, onClose } = props

  return (
    // .toString() pour éviter les alertes dans la console
    <ModalBackground display={display.toString()}>
      <ModalContainer width={width}>
        <ModalTitle>
          {title}
          <CloseModal onClick={onClose} />
        </ModalTitle>
        <hr />
        {children}
      </ModalContainer>
    </ModalBackground>
  )
}

Modal.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClose: PropTypes.func.isRequired
}

const ModalBackground = styled.div`
  position: absolute;
  display: ${props => (props.display === 'true' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`

const CloseModal = styled(FiXCircle)`
  height: 0.7em;
`

const ModalContainer = styled.div`
  width: ${props => `calc(${props.width} - 24px)`};
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;
`
const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
`
export default Modal
