import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';

import { NgIdModule } from 'src/app/demo/modules/ng-id/ng-id.module';

import { AppKanbanRoutingModule } from './app-kanban-routing.module';
import { AppKanbanComponent } from './app-kanban.component';
import { KanbanBoardlistCardComponent } from './kanban-boardlist-card.component';
import { KanbanBoardlistComponent } from './kanban-boardlist.component';
import { KanbanCardEditorComponent } from './kanban-card-editor.component';
import { FormatFileSizePipe } from './format-file-size.pipe';

@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
        FormsModule,
        NgIdModule,
        AppKanbanRoutingModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        ButtonModule,
        CalendarModule,
        CheckboxModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        InplaceModule,
        InputTextModule,
        InputTextareaModule,
        ListboxModule,
        MenuModule,
        OverlayPanelModule,
        ProgressBarModule,
        TableModule,
        TabMenuModule,
        TieredMenuModule,
        ScrollPanelModule,
        SidebarModule,
    ],
    declarations: [
        FormatFileSizePipe,
        AppKanbanComponent,
        KanbanCardEditorComponent,
        KanbanBoardlistCardComponent,
        KanbanBoardlistComponent
    ]
})
export class AppKanbanModule {}
