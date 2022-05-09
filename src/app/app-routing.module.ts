import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { EmiComponent } from './emi/emi.component';
import { InterestComponent } from './interest/interest.component';
import { CagrComponent } from './cagr/cagr.component';
import { DebtFreeComponent } from './debt-free/debt-free.component';
import { RentReceiptsComponent } from './rent-receipts/rent-receipts.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'mortgage', component: MortgageComponent },
    { path: 'emi', component: EmiComponent },
    { path: 'interest', component: InterestComponent },
    { path: 'cagr', component: CagrComponent },
    { path: 'debt-free', component: DebtFreeComponent },
    { path: 'rent-receipts', component: RentReceiptsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
