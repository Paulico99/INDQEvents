import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { EventsComponent } from './pages/events/events.component';
import { LoginComponent } from './pages/users/login/login.component';
import { FormeventComponent } from './pages/events/formevent/formevent.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 


const routes: Routes = [
  { path: 'event', component: FormeventComponent },
  { path: 'events', component: EventsComponent },
  { path: 'register', component: UsersComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: '/login' }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EventsComponent,
    LoginComponent,
    FormeventComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
