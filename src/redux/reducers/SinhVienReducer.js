const initialState = {
    dsSV:[{maSV:1,hoTen:"Nguyễn Văn A",sdt:"0123456789",email:"abc@gmail.com"}]
}

export const SinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'THEM_SV':
        const dsSV = state.dsSV;
        dsSV.push(action.sv);
        state.dsSV = [...dsSV];
        console.log(`state.dsSV`, state.dsSV)
        return { ...state }

    default:
        return state
    }
}
