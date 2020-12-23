import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  title: string;
  createForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              private dialog: MatDialogRef<any>,
              private fb: FormBuilder) {
    this.title = this.dialogData.title;
  }

  ngOnInit(): void {
    const name = this.dialogData.name || '';
    const description = this.dialogData.description || '';
    const city = this.dialogData.city || '';

    this.createForm = this.fb.group({
      name: [name, Validators.required],
      description: [description, Validators.required],
      city: [city, Validators.required]
    });
  }

  save(): void {
    const data = this.createForm.getRawValue();
    this.dialog.close(data);
  }
}
