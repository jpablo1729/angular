import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecordsService } from './records.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TotestservicesComponent } from './totestservices/totestservices.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TotestservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TotestservicesComponent

      },
      {
        path: 'hello',
        component: HelloComponent
      }
    ])
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
