const initialState = {
    gioHang: [
        // { maSP:1, tenSP:'abc',giaBan:100000,soLuong:1,hinhAnh: "https://raw.githubusercontent.com/khaitruong1301/react_video/master/public/img/vsphone.jpg"}
    ]
}

export const GioHangReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'THEM_GIO_HANG': {
            const gioHang = state.gioHang;
            const index = gioHang.findIndex(item => item.maSP === action.spGH.maSP);
            if (index === -1) {
                gioHang.push(action.spGH);
            } else {
                gioHang[index].soLuong += 1;
            }
            state.gioHang = [...gioHang];
            return { ...state };
        }
        case 'XOA_GIO_HANG': {
            state.gioHang = [...state.gioHang.filter(item => item.maSP !== action.maSP)];
            return { ...state };
        }
        case 'TANG_GIAM_SL': {
            const gioHang = state.gioHang;
            const index = gioHang.findIndex(item => item.maSP === action.maSP);
            if (index !== -1) {
                if (action.tangGiam === 'Decrease') {
                    if (gioHang[index].soLuong === 1) {
                        gioHang.splice(index, 1);
                    } else {
                        gioHang[index].soLuong -= 1;
                    }
                }
                else
                    gioHang[index].soLuong += 1;

            }
            state.gioHang = [...gioHang];
            return { ...state };
        }
        default:
            return { ...state };
    }
}
