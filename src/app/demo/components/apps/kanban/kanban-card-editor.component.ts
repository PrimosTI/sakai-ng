import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ConfirmationService, MenuItem } from "primeng/api"

import { NgIdService } from "src/app/demo/modules/ng-id/ng-id.service";

import { BoardlistRef, Card, Person, TaskList } from "./api/kanban";

@Component({
    selector: 'app-KanbanCardEditor',
    templateUrl: './kanban-card-editor.component.html',
    styleUrls: [ './kanban-card-editor.component.scss' ],
    providers: [ ConfirmationService ]
})
export class KanbanCardEditorComponent implements OnInit {

    @Input()
    boardlists!: BoardlistRef[];

    @Output()
    removeCard: EventEmitter<Card> = new EventEmitter();

    @Output()
    saveCard: EventEmitter<Card> = new EventEmitter();

    card!: Card;

    uniqueIdPrefix!: string;
    visible!: boolean;
    commentValue!: string;
    filteredAssignees!: Person[];

    tabsMenu!: MenuItem[];
    cardMenu!: MenuItem[];
    tasklistMenu!: MenuItem[];

    constructor(
        private confirmationService: ConfirmationService,
        private idService: NgIdService,
    ) {}

    ngOnInit(): void {
        this.uniqueIdPrefix = this.idService.generateId();

        this.visible = false;
        this.commentValue = '';
        this.filteredAssignees = [];

        this.tabsMenu = [
            { id: 'details', label: 'Details', icon: 'pi pi-align-left' },
            { id: 'attachments', label: 'Attachments', icon: 'pi pi-paperclip' }
        ];

        this.cardMenu = [{
            label: 'Move to...',
            items: [
                { separator: true },
                { label: 'Backlog' },
                { label: 'In Progress' }
            ]
        }];

        this.tasklistMenu = [{
            label: 'Move to...',
            items: [
                { separator: true },
                { label: 'Backlog' },
                { label: 'In Progress' }
            ]
        }];
    }

    onSearchAssignee(term: { query: string }) {
        this.filteredAssignees = personData.filter(x => x.name.toLowerCase().indexOf(term.query.toLowerCase()) != -1);
    }

    onSave() {
        this.saveCard.emit(this.card);
    }

    onRemoveCard($event: Event) {
        const card = this.card;

        this.confirmationService.confirm({
            key: this.uniqueIdPrefix,
            target: $event.target ?? void 0,
            header: `Remove "${card.label}" card`,
            message: `Are you sure that you want to remove "${card.label}" card?`,
            acceptLabel: 'Remove',
            acceptIcon: 'pi pi-trash',
            acceptButtonStyleClass: 'p-button-text p-button-danger',
            rejectLabel: 'Cancel',
            rejectButtonStyleClass: 'p-button-text',
            accept: () => {
                this.removeCard.emit(card);
                this.hide();
            }
        });
    }

    show(card: Card) {
        this.card = card;
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    createTasklist(label: string) {
        this.card.tasklists.push({
            label,
            tasks: []
        })
    }

    createTask(tasklist: TaskList, description: string) {
        tasklist.tasks.push({
            description,
            done: false
        })
    }

    sendComment(comment: string) {
        if (!comment)
            return;

        this.card.comments.push({
            date: new Date(),
            author: { name: 'Jane Cooper' },
            content: comment
        });
    }

    computeTotalTasks(tasklists: TaskList[]) {
        return tasklists.reduce((v, x) => v + x.tasks.length, 0);
    }

    computeCompletedTasks(tasklists: TaskList[]) {
        return tasklists.reduce(
            (v, x) => v + x.tasks.reduce(
                (v, x) => v + (x.done ? 1 : 0),
                0
            ),
            0
        );
    }

    computePercentTasks(tasklists: TaskList[]) {
        const total = this.computeTotalTasks(tasklists);

        if (total > 0) {
            return this.computeCompletedTasks(tasklists) / total * 100;
        }

        return 0;
    }
}

const personData = [
    { name: 'Amy Elsner', avatar: 'assets/demo/images/avatar/amyelsner.png' },
    { name: 'Anna Fali', avatar: 'assets/demo/images/avatar/annafali.png' },
    { name: 'Asiya Javayant', avatar: 'assets/demo/images/avatar/asiyajavayant.png' },
    { name: 'Bernardo Dominic', avatar: 'assets/demo/images/avatar/bernardodominic.png' },
    { name: 'Elwin Sharvill', avatar: 'assets/demo/images/avatar/elwinsharvill.png' },
    { name: 'Ioni Bowcher', avatar: 'assets/demo/images/avatar/ionibowcher.png' },
    { name: 'Ivan Magalhaes', avatar: 'assets/demo/images/avatar/ivanmagalhaes.png' },
    { name: 'Onyama Limba', avatar: 'assets/demo/images/avatar/onyamalimba.png' },
    { name: 'Stephen Shaw', avatar: 'assets/demo/images/avatar/stephenshaw.png' },
    { name: 'XuXue Feng', avatar: 'assets/demo/images/avatar/xuxuefeng.png' }
];
