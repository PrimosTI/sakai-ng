import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'kanban', loadChildren: () => import('./kanban/app-kanban.module').then(m => m.AppKanbanModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
