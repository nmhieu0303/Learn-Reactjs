import React from 'react'
import {connect} from 'react-redux'

function Dices(props) {
    const { dices } = props;
    return (
        <div className= "d-flex justify-content-center my-4">
            {dices.map(item => {
                return (
                    <img src={`./images/${item}.png`} alt={`${item}.png`} />
                )
            })}
        </div>

    )
}

const mapStateToProps = (state) => {
    return{
        dices : state.GameXucXacReducer.dices
    }
}

export default connect(mapStateToProps,null)(Dices)
