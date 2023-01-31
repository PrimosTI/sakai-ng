import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppKanbanComponent } from './app-kanban.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppKanbanComponent }
    ])],
    exports: [RouterModule]
})
export class AppKanbanRoutingModule { }
