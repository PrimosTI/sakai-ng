import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceDemoRoutingModule } from './invoicedemo-routing.module';
import { InvoiceDemoComponent } from './invoicedemo.component';

@NgModule({
    imports: [
        CommonModule,
        InvoiceDemoRoutingModule
    ],
    declarations: [InvoiceDemoComponent]
})
export class InvoiceDemoModule {}
