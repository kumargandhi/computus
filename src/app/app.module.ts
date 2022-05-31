import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './commom/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MortgageComponent } from './mortgage/mortgage.component';
import { MortgageInputsComponent } from './mortgage/mortgage-inputs/mortgage-inputs.component';
import { MortgageResultsComponent } from './mortgage/mortgage-results/mortgage-results.component';
import { EmiComponent } from './emi/emi.component';
import { NumberFormatterPipe } from './commom/pipes/number-formatter.pipe';
import { InfoComponent } from './commom/components/info/info.component';
import { EMICalculatorInputsComponent } from './emi/emi-calculator-inputs/emi-calculator-inputs.component';
import { EmiCalculatorResultsComponent } from './emi/emi-calculator-results/emi-calculator-results.component';
import { InterestComponent } from './interest/interest.component';
import { InterestCalculatorInputsComponent } from './interest/interest-calculator-inputs/interest-calculator-inputs.component';
import { InterestCalculatorResultsComponent } from './interest/interest-calculator-results/interest-calculator-results.component';
import { CagrComponent } from './cagr/cagr.component';
import { CagrInputsComponent } from './cagr/cagr-inputs/cagr-inputs.component';
import { CagrResultsComponent } from './cagr/cagr-results/cagr-results.component';
import { DebtFreeComponent } from './debt-free/debt-free.component';
import { DebtFreeInputsComponent } from './debt-free/debt-free-inputs/debt-free-inputs.component';
import { DebtFreeResultsComponent } from './debt-free/debt-free-results/debt-free-results.component';
import { RentReceiptsComponent } from './rent-receipts/rent-receipts.component';
import { RentInputsComponent } from './rent-receipts/rent-inputs/rent-inputs.component';
import { RentResultsComponent } from './rent-receipts/rent-results/rent-results.component';

@NgModule({
    declarations: [
        AppComponent,
        NumberFormatterPipe,
        HomeComponent,
        HeaderComponent,
        MortgageComponent,
        MortgageInputsComponent,
        MortgageResultsComponent,
        EmiComponent,
        EMICalculatorInputsComponent,
        InfoComponent,
        EmiCalculatorResultsComponent,
        InterestComponent,
        InterestCalculatorInputsComponent,
        InterestCalculatorResultsComponent,
        CagrComponent,
        CagrInputsComponent,
        CagrResultsComponent,
        DebtFreeComponent,
        DebtFreeInputsComponent,
        DebtFreeResultsComponent,
        RentReceiptsComponent,
        RentInputsComponent,
        RentResultsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
