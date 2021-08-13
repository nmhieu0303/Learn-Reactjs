import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCommentAction } from '../../redux/actions/FacebookActions';

export default function DemoReduxApp(props) {
    const commnents = useSelector(state => state.FacebookReducer.comments)
    const dispatch = useDispatch();

    const [state, setstate] = useState({
        name: '',
        content: '',
        avatar: ''
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setstate({
            ...state, [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const item = {
            ...state, avatar: `https://i.pravatar.cc/150?u=${state.name}`
        }
        dispatch(addCommentAction(item))
        setstate({
            name: '',
            content: '',
            avatar: ''
        })
    }
    return (
        <div className="container">
            <div className="card w-75 mx-auto my-5">
                <div className="card-header">
                    <h3> Facebook App</h3>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {commnents.map((item, index) => {
                            return <li className="list-group-item" key={index}>
                                <div className="row">
                                    <div className="col-1">
                                        <img className="w-100" src={item.avatar} alt={item.name} />
                                    </div>
                                    <div className="col-11">
                                        <h6 className="text-bold">{item.name} </h6>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="card-footer text-muted">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={state.name} onChange={onChange} placeholder="Nguyen Van A" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Content</label>
                            <input type="text" className="form-control" name="content" value={state.content} onChange={onChange} placeholder="Everything" />
                        </div>
                        <button type="submit" className="btn btn-success" onClick={onSubmit}>Submit</button>
                    </form>

                </div>
            </div>
        </div >
    )
}
