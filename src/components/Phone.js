import React from 'react'
import styled from 'styled-components'

const PhoneWrapper = styled.div`
    display: inline-block;
    height: 100%;
`

const Image = styled.img`
    height: 100%;
`

const Phone = (props) => {
    return <PhoneWrapper onClick={e => props.handleOnClick(props.phone)}>
        <Image src={process.env.PUBLIC_URL + '/images/' + props.phone.imageFileName} />
    </PhoneWrapper>
}

export default Phone