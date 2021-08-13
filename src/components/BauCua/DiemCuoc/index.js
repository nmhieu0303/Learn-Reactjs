import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DiemCuoc(props) {
    const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem)
    const dispatch = useDispatch();
    return (
        <div>
            <h3 className="display-5 pt-2 text-center" style={{ color: 'red' }}>
                Game bầu cua
            </h3>
            <div className="mt-2 text-center" >
                <span className="p-2 rounded" style={{ backgroundColor: 'red', color: 'yellow' }}>{`Tiền thưởng : `}
                    <span className="text-light" style={{ fontSize: '20px' }}>{tongDiem.toLocaleString()}</span>
                    {`$`}
                </span>
            </div>
            <div className="mt-3 text-center" >
                <button className="btn btn-success" onClick={() =>dispatch({type:'CHOI_LAI'})}>
                    {`Chơi lại`}
                </button>
            </div>
        </div>
    )
}
