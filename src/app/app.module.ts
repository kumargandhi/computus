import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
