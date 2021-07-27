import React, { useState } from 'react'
import { connect } from 'react-redux';

function FromSinhVien(props) {
    const { themSV } = props;
    const [state, setState] = useState({
        values: {
            maSV: '',
            hoTen: '',
            sdt: '',
            email: ''
        },
        errors: {
            maSV: '',
            hoTen: '',
            sdt: '',
            email: ''
        }
    })
    const onChange = (e) => {
        const tagInput = e.target;
        const { name, value, type } = tagInput;
        if (type === 'email') {
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!regex.test(value)) {
                setState(prevState => {
                    prevState.errors.email = 'Email không hợp lệ!'
                    return { ...prevState }
                })
            }else{
                setState(prevState => {
                    prevState.errors.email = ''
                    return { ...prevState }
                })
            }
        }
        else if (value === '') {
            setState(prevState => {
                prevState.errors[name] = name + ' không được bỏ trống!'
                return { ...prevState }
            })
        } else {
            setState(prevState => {
                prevState.errors[name] = ''
                return { ...prevState }
            })
        }
        setState(prevState => {
            prevState.values[name] = value
            return { ...prevState }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        themSV(state.values)
        setState({
            values: {
                maSV: '',
                hoTen: '',
                sdt: '',
                email: ''
            },
            errors: state.errors
        })
    }

    const renderBtn = () => {
        for (let error in state.errors) {
            if (state.errors[error] !== '') return true;
        }
        return false
    }

    return (
        <div className="container mb-3">
            <div className="card">
                <div className="card-header text-start text-light bg-dark">
                    Thông tin sinh viên
                </div>
                <div className="card-body">
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="col-md-6">
                            <span>Mã sinh viên</span>
                            <input type="text" className="form-control" name="maSV" value={state.values.maSV} onChange={onChange} />
                            <p className="text-danger">{state.errors.maSV}</p>
                        </div>
                        <div className="col-md-6">
                            <span>Họ tên</span>
                            <input type="text" className="form-control" name="hoTen" value={state.values.hoTen} onChange={onChange} />
                            <p className="text-danger">{state.errors.hoTen}</p>
                        </div>
                        <div className="col-md-6">
                            <span>Số điện thoại</span>
                            <input type="text" className="form-control" name="sdt" value={state.values.sdt} onChange={onChange} />
                            <p className="text-danger">{state.errors.sdt}</p>
                        </div>
                        <div className="col-md-6">
                            <span>Email</span>
                            <input type="email" className="form-control" name="email" value={state.values.email} onChange={onChange} />
                            <p className="text-danger">{state.errors.email}</p>
                        </div>
                        <div className="col-12 text-end">
                        <button type="submit" className="btn btn-success w-25 " disabled={renderBtn()}>Thêm</button>
                        </div>
                    </form>

                </div>
            </div>


        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        themSV: (sv) => {
            console.log(`sv`, sv)
            dispatch({
                type: 'THEM_SV',
                sv
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(FromSinhVien)