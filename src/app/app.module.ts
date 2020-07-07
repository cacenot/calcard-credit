import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from "ngx-currency";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { PageIllustrationComponent } from './components/page-illustration/page-illustration.component';
import { CreditFormComponent } from './components/credit-form/credit-form.component';
import { ValidationService } from './services/validation-service.service';
import { CreditService } from './services/credit.service';
import { ApprovedIllustrationComponent } from './components/approved-illustration/approved-illustration.component';
import { DeniedIllustrationComponent } from './components/denied-illustration/denied-illustration.component';
import { LoaderComponent } from './components/loader/loader.component';
import { EntranceBannerComponent } from './components/entrance-banner/entrance-banner.component';


@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    PageIllustrationComponent,
    CreditFormComponent,
    ApprovedIllustrationComponent,
    DeniedIllustrationComponent,
    LoaderComponent,
    EntranceBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule
  ],
  providers: [
    ValidationService,
    CreditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
