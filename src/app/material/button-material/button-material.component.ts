import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-button-material',
  templateUrl: './button-material.component.html',
  styleUrl: './button-material.component.scss'
})
export class ButtonMaterialComponent {
  public name?: String;

  constructor(public dialog: MatDialog){}

  buttonHandler(): void{
    const dialogRef = this.dialog.open(NameFormDialog,{
      data: this.name,
    });

    dialogRef.afterClosed().subscribe(name => {
      this.name= name;
    });
  }
}

@Component({
  selector: 'name-dialog',
  standalone: true,
  template: `
  <h2 mat-dialog-title>Form inside a dialog</h2>
  <mat-dialog-content>
    <p>What's your name?</p>
    <mat-form-field>
      <input matInput [(ngModel)]="data">
    </mat-form-field>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button (click)="onNoClick()">No Thanks</button>
    <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Ok</button>
  </mat-dialog-actions>
  `,
  imports: [ MatFormField, MatDialogContent, MatDialogClose, MatDialogActions, MatDialogTitle, MatButtonModule, FormsModule,MatInputModule,MatFormFieldModule
  ],
})
export class NameFormDialog {
  constructor(
    public dialogRef: MatDialogRef<ButtonMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
