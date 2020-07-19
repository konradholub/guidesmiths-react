import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components'

import { fetchPhones } from "../actions"
import Phone from './Phone'
import PhoneDetails from './PhoneDetails'

const StyledWrapper = styled.div`

`

const PhonesWrapper = styled.div`
    max-width: 1000px;
    margin 20px auto;
    height: 200px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
`

const PhonesList = (props) => {

    const [selectedPhone, setSelectedPhone] = useState(null)

    const { data, isPhonesLoading, fetchPhones } = props

    const handleOnClick = (phone) => {
        setSelectedPhone(phone)
    }

    useEffect(() => {
        fetchPhones()
    }, [fetchPhones])

    let phonesComponents = data.map(phone => <Phone key={phone.id} phone={phone} handleOnClick={handleOnClick}/>)

    return <StyledWrapper>
        {isPhonesLoading ? <CircularProgress /> : <PhonesWrapper>{phonesComponents}</PhonesWrapper>}
        {selectedPhone ? <PhoneDetails phone={selectedPhone} /> : null}
    </StyledWrapper>
}

const mapStateToProps = ({ data = [], isPhonesLoading = false }) => ({
    data,
    isPhonesLoading
});

export default connect(
    mapStateToProps,
    {
        fetchPhones
    }
)(PhonesList);