import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent implements OnInit {
  products!:any[];
  displayedColumns: string[] = [
    'name',
    'categoryId',
    'price',
    'cooktime',
    'favorite',
    'description',
    'stars',
    'imageurl',
    'tags',
    'edit'
  ];
  dataSource: any;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private router:Router) {}

  ngOnInit(): void {
    this.tableData();
  }

  tableData(){
    this.productService.getProducts().subscribe((res:any)=>{
      this.products = res;
    },
    (err)=>{
      console.log(err);
    })
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleAddAction(){}

  handleEditAction(values:any){}
  handleDeleteAction(values:any){}
  onChange(status:any){}
}
