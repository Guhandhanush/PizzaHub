import { DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { DialogCategoryComponent } from '../dialog-category/dialog-category.component';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css'],
})
export class ManageCategoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'edit','id'];
  dataSource: any;

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tableData();
  }

  tableData() {
    this.categoryService.getCategory().subscribe(
      (res: any) => {
        this.dataSource = new MatTableDataSource(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleAddAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action:'Add'
    }
    dialogConfig.width = '850px';
    const dialogref = this.dialog.open(DialogCategoryComponent,dialogConfig);
    this.router.events.subscribe(()=>{
      dialogref.close();
    });
    const sub = dialogref.componentInstance.onAddCategory.subscribe((res)=>{
      this.tableData();
    })
  }

  handledEditAction(value:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action:'Edit',
      data:value
    }
    dialogConfig.width = '850px';
    const dialogref = this.dialog.open(DialogCategoryComponent,dialogConfig);
    this.router.events.subscribe(()=>{
      dialogref.close();
    });
    const sub = dialogref.componentInstance.onEditCategory.subscribe((res)=>{
      this.tableData();
    })
  }
}
