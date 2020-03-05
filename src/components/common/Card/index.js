import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Card = props => {
  const { image, onClick, children } = props

  return (
    <StyledCard background={image} onClick={onClick}>
      {children}
    </StyledCard>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const StyledCard = styled.div`
  width: calc(100% - 48px);
  color: #353b42;
  padding: 24px;
  margin: 6px 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px 0px;
  transition: 0.3s;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: white;

  background-image: ${props =>
    props.background
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.background})`
      : ``};
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default Card
