import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = props => {
  const { backgroundColor, onClick, children } = props
  return (
    <StyledButton background={backgroundColor} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const StyledButton = styled.div`
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: ${props =>
    props.background ? props.background : '#0050aa'};
`

export default Button
