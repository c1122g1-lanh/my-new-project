var ly = (+prompt("nhập điểm vật lý"));
var hoa = (+prompt("nhập điểm hoá"));
var sinh = (+prompt("nhập điểm sinh"));
if (0<= ly <=100) {
    var dtb = (ly + ho + sinh) / 3;
    var tong = ly + hoa + sinh;
    document.write("dtb" + dtb + "<br>");
    document.write("tong" + tổng);
} else {
    document.write('nhap sai diem')
}
