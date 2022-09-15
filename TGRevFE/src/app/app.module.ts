import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TitleComponent } from './layout/menu/title/title.component';
import { BreadcrumbsComponent } from './layout/menu/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './layout/menu/nav/nav.component';
import { AuthComponent } from './layout/auth/auth.component';
import { BodyComponent } from './layout/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BreadcrumbsComponent,
    NavComponent,
    AuthComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
