import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './commom/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MortgageComponent } from './mortgage/mortgage.component';
import { CalculatorInputsComponent } from './mortgage/calculator-inputs/calculator-inputs.component';
import { CalculatorResultsComponent } from './mortgage/calculator-results/calculator-results.component';
import { EmiComponent } from './emi/emi.component';
import { NumberFormatterPipe } from './commom/pipes/number-formatter.pipe';
import { InfoComponent } from './commom/components/info/info.component';
import { EMICalculatorInputsComponent } from './emi/emi-calculator-inputs/emi-calculator-inputs.component';
import { EmiCalculatorResultsComponent } from './emi/emi-calculator-results/emi-calculator-results.component';
import { InterestComponent } from './interest/interest.component';
import { InterestCalculatorInputsComponent } from './interest/interest-calculator-inputs/interest-calculator-inputs.component';

@NgModule({
    declarations: [
        AppComponent,
        NumberFormatterPipe,
        HomeComponent,
        HeaderComponent,
        MortgageComponent,
        CalculatorInputsComponent,
        CalculatorResultsComponent,
        EmiComponent,
        EMICalculatorInputsComponent,
        InfoComponent,
        EmiCalculatorResultsComponent,
        InterestComponent,
        InterestCalculatorInputsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
