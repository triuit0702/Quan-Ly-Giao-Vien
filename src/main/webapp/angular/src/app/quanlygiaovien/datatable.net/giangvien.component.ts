// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
import { ViewChild, OnDestroy, AfterViewInit, Component, OnInit } from '@angular/core';
import { GiangVienService } from './giangvien.service';
import { GiangVien } from '../../model/GiangVien';
import { Observable, Subject  } from 'rxjs'; 
import { Router } from '@angular/router';



declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
    selector: 'app-data-table-cmp',
    templateUrl: 'datatable.component.html',
    styleUrls:['datatable.component.css']
})

export class GiangVienComponent implements OnInit, AfterViewInit {

    constructor(private giangvienService:GiangVienService, private router: Router){}


    public teachchers: Observable<GiangVien[]>; 
    public dataTable: DataTable;
    totalItems: number =50;
    page: number =1;
    itemsPerPage: number =10;

    ngOnInit() {

        this.giangvienService.getGiangVienList().subscribe( data =>{
            this.teachchers = data;
        })

        this.dataTable = {
            headerRow: [ 'Mã GV', 'Họ Tên', 'Giới Tính', 'Email', 'Ngày Sinh', 'Nơi Sinh', 'Dân Tộc', 'Học Vị','Chức Vụ', 'Số Điện Thoai', 'Action' ],
            footerRow: [ 'Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions' ],

            dataRows: [
                ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225', '','','dsfdf']
            ]
        };

    }


    ngAfterViewInit() {
        // $('#datatables').DataTable({
        //     "scrollX": true,
        //     "scrollY": 450,
        //     "bPaginate": false,
        //     responsive: true,
        //     language: {
        //         search: "_INPUT_",
        //         searchPlaceholder: "Search records",
        //     },
        //     "bLengthChange": false,
        //     "bFilter": false,
        //     "bInfo": false,
        //     "bAutoWidth": true,
        //     "bSort": false

        // });

        // $('#datatables1').DataTable({
        //     "scrollX": true,
        //     "scrollY": 450,
        //     "bPaginate": false,
        //     responsive: true,
        //     language: {
        //         search: "_INPUT_",
        //         searchPlaceholder: "Search records",
        //     },
        //     "bLengthChange": false,
        //     "bFilter": true,
        //     "bInfo": false,
        //     "bAutoWidth": true

        // });

        // const table = $('#datatables').DataTable();

        $(document).ready(function() {
            $('#datatables').DataTable({
                "scrollX": true,
                "scrollY": 470,
                "bPaginate": false,
                "bSort": false,
                responsive: true,
                "bLengthChange": false,
                "bFilter": false,
                "bInfo": true,
                "bAutoWidth": true,
                "bSearching": false,
                "language": {
                    "decimal":        "",
                    "emptyTable":     "",
                    "info":           "",
                    "infoEmpty":      "",
                    "infoFiltered":   "",
                    "infoPostFix":    "",
                    "thousands":      ",",
                    "lengthMenu":     "",
                    "loadingRecords": "Loading...",
                    "processing":     "Processing...",
                    "search":         "Search:",
                    "zeroRecords":    "",
                    "paginate": {
                        "first":      "First",
                        "last":       "Last",
                        "next":       "Next",
                        "previous":   "Previous"
                    },
                    "aria": {
                        "sortAscending":  ": activate to sort column ascending",
                        "sortDescending": ": activate to sort column descending"
                    }
                }
            });

            // $('#datatables1').DataTable({
            //     "scrollX": true,
            //     "scrollY": 450,
            //     "bPaginate": false,
            //     responsive: true,
            //     language: {
            //         search: "INPUT",
            //         searchPlaceholder: "Search records",
            //     },
            //     "bLengthChange": true,
            //     "bFilter": true,
            //     "bInfo": true,
            //     "bAutoWidth": true
            //
            // });


            $('.card .material-datatables label').addClass('form-group');
        })

        // Edit record
        // table.on('click', '.edit', function(e) {
        //     const $tr = $(this).closest('tr');
        //     const data = table.row($tr).data();
        //     console.log(data);
        //     alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        //     //this.router.navigate("/quanlygiaovien/addgiangvien");
        //     e.preventDefault();
        // });

        // Delete a record
        // table.on('click', '.remove', function(e) {
        //     const $tr = $(this).closest('tr');
        //     table.row($tr).remove().draw();
        //     e.preventDefault();
        // });

        //Like record
        // table.on('click', '.like', function(e) {
        //     alert('You clicked on Like button');
        //     e.preventDefault();
        // });

        //$('.card .material-datatables label').addClass('form-group');
    }


    loadPage(page: any) {

    }

    selectedItemPerPage() {

    }

     searchGV = function (event) {
        if (event.keyCode == 13) {
            this.giangvienService.getGiangVienByHoTenOrMaGV(event.target.value).subscribe( data =>{
                this.teachchers = data;
            })
        }
    }

    editgiangvien = function(data) {
        this.router.navigate(["/quanlygiaovien/addgiangvien", data]);
    }

    deletegiangvien = function(value) {
        this.giangvienService.deleteGiangVien(value).subscribe( data => {
            this.giangvienService.getGiangVienList().subscribe( data =>{
                this.teachchers = data;
                console.log(this.teachchers);
            })
        })
    }

    reloadData() {
        this.teachchers = this.giangvienService.getGiangVienList();
      }

}
