import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InvoiceDemoComponent } from './invoicedemo.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: InvoiceDemoComponent }
    ])],
    exports: [RouterModule]
})
export class InvoiceDemoRoutingModule { }
