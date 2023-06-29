import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ManageCategoryComponent } from '../manage-category/manage-category.component';

@Component({
  selector: 'app-dialog-category',
  templateUrl: './dialog-category.component.html',
  styleUrls: ['./dialog-category.component.css'],
})
export class DialogCategoryComponent implements OnInit {
  onAddCategory = new EventEmitter();
  onEditCategory = new EventEmitter();
  categoryForm!: FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formbuilder: FormBuilder,
    private categoryService: CategoryService,
    private dialogref: MatDialogRef<ManageCategoryComponent>
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formbuilder.group({
      name: ['', [Validators.required]],
    });
    if (this.dialogData.action === 'Edit') {
      this.dialogAction = 'Edit';
      this.action = 'Update';
      this.categoryForm.patchValue(this.dialogData.data);
    }
  }

  handleSubmit() {
    if (this.dialogAction === 'Edit') {
      this.edit();
    } else {
      this.add();
    }
  }

  add() {
    var formdata = this.categoryForm.value;
    var data = {
      name: formdata.name,
    };
    this.categoryService.add(data).subscribe(
      (res) => {
        this.dialogref.close();
        this.onAddCategory.emit();

      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit() {
    var formdata = this.categoryForm.value;
    var data = {
      id:this.dialogData.data.id,
      name: formdata.name,
    };
    this.categoryService.update(data).subscribe(
      (res) => {
        this.dialogref.close();
        this.onEditCategory.emit();
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
