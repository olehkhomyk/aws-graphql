import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

/* Import Angular Material */
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { TodosComponent } from './todos/todos.component';
import { DialogComponent } from './todos/dialog/dialog.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TodosComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Material modules.
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [AuthService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
