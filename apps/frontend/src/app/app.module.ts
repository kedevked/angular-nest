import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [AppComponent, NavigationComponent, DashboardComponent, TodoListComponent, TodoComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule,
     MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, 
    AppRoutingModule, MatInputModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule,
    MatDividerModule,MatListModule
  ]
  ,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
