import { Component } from '@angular/core';
import { GiangVien } from 'src/app/model/GiangVien';
import { Router, ActivatedRoute } from '@angular/router';
import { GiangVienService } from '../datatable.net/giangvien.service';
import { Observable } from 'rxjs'; 
import * as moment from 'moment';

declare var $: any;
var today = new Date().toISOString().substring(0, 10);
@Component({
    selector: 'app-form-giangvien-cmp',
    templateUrl: 'form-giangvien.component.html'
})

//var today = new Date().toISOString().substring(0, 10);
export class FormGiangVienComponent {
    teachchers: Observable<GiangVien[]>; 
    teachcher: GiangVien = new GiangVien();
    
    constructor(private activatedRoute: ActivatedRoute, private giangvienService:GiangVienService, private router: Router){}
    sexList = [
        {value: true, viewValue: 'nam'},
        {value: false, viewValue: 'nữ'},
      ]; 

    sub;
    ngOnInit() {

        let id = null;
        this.sub=this.activatedRoute.paramMap.subscribe(params => { 
            id = params.get('id');
         });

         // get giang vien by maGV
         if (id !== null) {
            this.giangvienService.getGiangVienById(id).subscribe( data => {
                this.teachcher = data;
                //$("#input_ngaysinh").val(new Date(this.teachcher.).toISOString().substring(0, 10));
            })
         } else {

         }
         
         //$("#input_ngaysinh").datepicker({ dateFormat: "dd/MM/yyyy" });
         
         
         


    }

    ngAfterViewInit() {
        //$("#input_ngaysinh").val(new Date().toISOString().substring(0, 10));
    }

    ngAfterViewChecked() {
        //console.log(this.teachcher.ngaySinh);
        //console.log("ngaysinh: ", $("#input_ngaysinh").val());
        //this.teachcher.ngaySinh = $("#input_ngaysinh").val();
        //$("#input_ngaysinh").val(new Date(this.teachcher.ngaySinh).toISOString().substring(0, 10));
    }
    saveGiangVien() {
        this.teachcher.ngaySinh=moment(this.teachcher.ngaySinhDate).format("DD-MM-YYYY");
        this.giangvienService.saveGiangVien(this.teachcher)
          .subscribe(data => {
            console.log(data);
            //this.teachcher = new Employee();
            this.gotoList();
          }, error => console.log(error));
      }

    gotoList() {
        this.router.navigate(["/quanlygiaovien/datatable.net"]);
    }

    onSubmit() {
        this.saveGiangVien();    
      }

    //   getDate() {
    //       if (this.teachcher.ngaySinh !== null || this.teachcher.ngaySinh !== undefined) {
    //         let date = new Date(this.teachcher.ngaySinh);
    //         return date;
    //       }
    //       return new Date().toISOString().substring(0, 10);
    //   }
}
