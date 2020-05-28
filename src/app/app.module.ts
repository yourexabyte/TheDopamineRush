import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './page-components/about/about.component';
import { ServicesComponent } from './page-components/services/services.component';
import { WorkComponent } from './page-components/work/work.component';
import { BlogComponent } from './page-components/blog/blog.component';
import { ContactComponent } from './page-components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    WorkComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
