import * as moment from "moment";

import { Moment } from "moment";

export class GiangVien {
    maGV:string;
    hoTen:string;
    ngaySinhDate:Date;
    gioiTinh:boolean;
    noiSinh:string;
    queQuan:string;
    danToc:string;
    hocVi:string;
    namNhanHV:number;
    nuocNhanHV:string;
    namBoNhiem:number;
    chucVu:string;
    donViCongTac:string;
    diaChi:string;
    dienThoai:string;
    email:string;
    constructor(){
        this.ngaySinhDate=new Date(1990,0,1);
    }
    // anh tạo 1 kiểu nữa là moment 
    ngaySinh:string;
    // truowsc khi anh guwri anh covert nagyfSinhDate veef Moment dajng YYYY?MMM/DD nhes
    //ngaySinh=moment(this.ngaySinhDate).format("YYYY/DD/MM") đó anh gửi cái này

}