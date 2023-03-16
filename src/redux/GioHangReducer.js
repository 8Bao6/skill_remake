const stateGioHang = {
  gioHang: [{ maSP: 1, tenSP: 'Iphone', soLuong: 1, giaBan: 50000, thanhTien: 50000 }]
}
export const GioHangReducer = (state = stateGioHang, action) => {
  return { ...state }
}