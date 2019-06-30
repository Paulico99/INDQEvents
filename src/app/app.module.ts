import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
  { path: 'login', component: UsersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
