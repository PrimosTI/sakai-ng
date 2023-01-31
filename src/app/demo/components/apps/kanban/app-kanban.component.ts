import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

import { NgIdService } from 'src/app/demo/modules/ng-id/ng-id.service';

import { Boardlist, Card } from './api/kanban';
import { KanbanCardEditorComponent } from './kanban-card-editor.component';

@Component({
    templateUrl: './app-kanban.component.html',
    styleUrls: [ './app-kanban.component.scss' ],
    providers: [ConfirmationService]
})
export class AppKanbanComponent implements OnInit {

    selectedCard?: Card;
    uniqueIdPrefix!: string;
    boardlists!: Boardlist[];

    @ViewChild('editor')
    editor!: KanbanCardEditorComponent;

    constructor(
        private idService: NgIdService,
        private confirmationService: ConfirmationService
        ) {
    }

    get dropListsIds() {
        return this.boardlists.map(x => `${this.uniqueIdPrefix}-${x.id}`);
    }

    ngOnInit(): void {
        this.uniqueIdPrefix = this.idService.generateId();

        this.boardlists = [{
            id: 'to-do',
            label: 'To Do',
            cards: [{
                id: '2f8423d7-87ae-4995-936c-4f213774f0a7',
                label: 'Lorem ipsum dolor sit amet',
                description: 'Vivamus ac dolor ac eros.',
                boardlist: { id: 'to-do', label: 'Backlog' },
                assignees: [],
                tasklists: [],
                attachments: [],
                comments: [],
            }, {
                id: 'e98d8a6c-9415-4138-ae91-c03c341e7ba0',
                label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                description: 'Vivamus ac dolor ac eros elementum efficitur.',
                boardlist: { id: 'to-do', label: 'Backlog' },
                assignees: [
                    { name: 'Anna Fali', avatar: 'assets/demo/images/avatar/annafali.png' },
                    { name: 'Ioni Bowcher', avatar: 'assets/demo/images/avatar/ionibowcher.png' },
                ],
                startDate: new Date(2022, 10, 15),
                dueDate: new Date(2022, 10, 16),
                tasklists: [],
                attachments: [],
                comments: [{
                    date: new Date(2022, 10, 15, 14, 5, 47),
                    author: { name: 'Ivan Magalhaes', avatar: 'assets/demo/images/avatar/ivanmagalhaes.png' },
                    content: 'Suspendisse mollis mattis arcu.'
                }],
            }, {
                id: 'afa7083a-c881-42ac-8fe5-7ce86d5dee1e',
                label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lobortis ante.',
                description: 'Vivamus ac dolor ac eros elementum efficitur. Nunc cursus nibh sem, vitae auctor libero suscipit sit amet. Pellentesque semper rutrum semper. Vivamus euismod lacinia dui, vitae dignissim metus tincidunt et.',
                boardlist: { id: 'to-do', label: 'Backlog' },
                assignees: [
                    { name: 'Anna Fali', avatar: 'assets/demo/images/avatar/annafali.png' },
                    { name: 'Ioni Bowcher', avatar: 'assets/demo/images/avatar/ionibowcher.png' },
                    { name: 'Amy Elsner', avatar: 'assets/demo/images/avatar/amyelsner.png' },
                ],
                startDate: new Date(2022, 10, 15),
                dueDate: new Date(2022, 10, 16),
                tasklists: [],
                attachments: [],
                comments: [{
                    date: new Date(2022, 10, 15, 14, 5, 47),
                    author: { name: 'Ivan Magalhaes', avatar: 'assets/demo/images/avatar/ivanmagalhaes.png' },
                    content: 'Suspendisse mollis mattis arcu. Maecenas at urna accumsan, tempus nunc in, euismod nisi.'
                }],
            }, {
                id: 'a229e237-7b82-49c8-b472-127ab9b05eb5',
                label: 'Donec odio dui, ornare a euismod bibendum, placerat et ipsum.',
                description: 'Etiam sit amet elit eget ipsum blandit elementum. In mollis molestie nunc, in vehicula ante blandit blandit. Donec eget bibendum odio.',
                boardlist: { id: 'to-do', label: 'Backlog' },
                assignees: [
                    { name: 'Amy Elsner', avatar: 'assets/demo/images/avatar/amyelsner.png' },
                ],
                startDate: new Date(2022, 10, 15),
                dueDate: new Date(2022, 10, 16),
                tasklists: [],
                attachments: [],
                comments: [{
                    date: new Date(2022, 10, 15, 14, 5, 47),
                    author: { name: 'Ivan Magalhaes', avatar: 'assets/demo/images/avatar/ivanmagalhaes.png' },
                    content: 'Suspendisse.'
                }],
            }]
        }, {
            id: 'in-progress',
            label: 'In Progress',
            cards: [{
                id: '18bfe224-8af8-43c3-acf8-ba93536530fe',
                label: 'Collect requirements from key stakeholders.',
                description: 'Clarifying what stakeholders expect out of the project, and what exactly the project is aiming to achieve (and why) will give the project and team clear direction.',
                boardlist: { id: 'in-progress', label: 'In Progress' },
                assignees: [
                    { name: 'Xuxue Feng', avatar: 'assets/demo/images/avatar/xuxuefeng.png' },
                    { name: 'Onyama Limba', avatar: 'assets/demo/images/avatar/onyamalimba.png' },
                    { name: 'Anna Fali', avatar: 'assets/demo/images/avatar/annafali.png' },
                    { name: 'Amy Elsner', avatar: 'assets/demo/images/avatar/amyelsner.png' }
                ],
                startDate: new Date(2022, 9, 17),
                dueDate: new Date(2022, 10, 2),
                tasklists: [
                    {
                        label: 'Tasklist',
                        tasks: [
                            { done: true, description: 'Identify all stackeholders' },
                            { done: true, description: 'Determine the channel and formality level to communicate with all stacke holders' },
                            { done: true, description: 'Collect the project perspective' },
                            { done: false, description: 'Collect the organizational perspective' },
                        ]
                    }
                ],
                attachments: [
                    { name: 'contact-list.docx', date: new Date(2022, 9, 17), size: 315796 },
                    { name: 'stackeholders-notes.docx', date: new Date(2022, 9, 21), size: 2498675 },
                ],
                comments: [{
                    date: new Date(2022, 9, 17, 8, 12, 7),
                    author: { name: 'Xuxue Feng', avatar: 'assets/demo/images/avatar/xuxuefeng.png' },
                    content: 'We need a document to list all the contacts'
                }, {
                    date: new Date(2022, 9, 17, 14, 22, 39),
                    author: { name: 'Amy Elsner', avatar: 'assets/demo/images/avatar/amyelsner.png' },
                    content: 'I\'ve created a document to register the contacts in "Attachments"'
                }],
            }, {
                id: '14d9f6c0-691e-47b6-9517-9b952ffc693a',
                label: 'Define the scope of the project.',
                description: 'Develope the Project Scope Statement. A project scope statement provides a detailed description of the work that must be done to deliver the output of a project on time and within the allotted budget.',
                boardlist: { id: 'in-progress', label: 'In Progress' },
                assignees: [
                    { name: 'Xuxue Feng', avatar: 'assets/demo/images/avatar/xuxuefeng.png' },
                    { name: 'Onyama Limba', avatar: 'assets/demo/images/avatar/onyamalimba.png' },
                    { name: 'Amy Elsner', avatar: 'assets/demo/images/avatar/amyelsner.png' },
                    { name: 'Ivan Magalhaes', avatar: 'assets/demo/images/avatar/ivanmagalhaes.png' },
                    { name: 'Ioni Bowcher', avatar: 'assets/demo/images/avatar/ionibowcher.png' },
                    { name: 'Anna Fali', avatar: 'assets/demo/images/avatar/annafali.png' },
                ],
                startDate: new Date(2022, 9, 31),
                dueDate: new Date(2022, 10, 17),
                tasklists: [{
                    label: 'Define the Project Scope Statement guidelines',
                    tasks: [
                        { done: true, description: 'Define the boundaries of the project.' },
                        { done: true, description: 'Define the business need and the expected outcome of the project.' },
                        { done: true, description: 'Identify constraints that limit a project team’s options for developing a solution.' },
                        { done: false, description: 'List assumptions regarding decisions outside the project team’s control.' },
                        { done: true, description: 'Identify business processes impacted by the project.' },
                        { done: false, description: 'Identify internal and external entities with which the project team will interface.' }
                    ]
                }, {
                    label: 'Write the Project Scope Statement document',
                    tasks: [
                        { done: false, description: 'Write the draft document' },
                        { done: false, description: 'Share the draft with another team members' },
                        { done: false, description: 'Meet to review the draft' },
                        { done: false, description: 'Write the proposal version' },
                        { done: false, description: 'Discuss the comments' },
                        { done: false, description: 'Write the final version' }
                    ]
                }],
                attachments: [
                    { name: 'pss-notes.docx', date: new Date(2022, 10, 10), size: 1315796 }
                ],
                comments: [{
                    date: new Date(2022, 10, 7, 15, 58, 37),
                    author: { name: 'Ivan Magalhaes', avatar: 'assets/demo/images/avatar/ivanmagalhaes.png' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }, {
                    date: new Date(2022, 10, 10, 12, 5, 57),
                    author: { name: 'Ioni Bowcher', avatar: 'assets/demo/images/avatar/ionibowcher.png' },
                    content: 'Vivamus ac dolor ac eros elementum efficitur. Nunc cursus nibh sem, vitae auctor libero suscipit sit amet.'
                }, {
                    date: new Date(2022, 10, 10, 17, 58, 37),
                    author: { name: 'Ivan Magalhaes', avatar: 'assets/demo/images/avatar/ivanmagalhaes.png' },
                    content: 'Donec odio dui, ornare a euismod bibendum, placerat et ipsum. Aliquam erat volutpat. Mauris viverra fringilla nunc, sed ullamcorper urna porta vel. Nam ex nibh, fringilla nec libero vitae, pharetra ultricies mauris. Duis imperdiet semper scelerisque. Etiam efficitur lorem vehicula consequat dignissim. Fusce orci libero, sagittis in felis eu, faucibus imperdiet quam. Donec sit amet scelerisque nulla. Sed vitae augue malesuada, congue ante a, euismod nunc. Sed ut sem nisl. Etiam nec massa in erat sollicitudin bibendum. Curabitur placerat odio porta mi ultricies, sed maximus augue porttitor. Etiam sit amet elit eget ipsum blandit elementum. In mollis molestie nunc, in vehicula ante blandit blandit. Donec eget bibendum odio.'
                }, {
                    date: new Date(2022, 10, 11, 8, 37, 58),
                    author: { name: 'Ioni Bowcher', avatar: 'assets/demo/images/avatar/ionibowcher.png' },
                    content: 'Nam id ante ornare, scelerisque metus in, placerat quam. Nam eget velit ultrices, scelerisque est ac, viverra augue. Aenean tellus urna, eleifend eu aliquam non, euismod blandit magna:\n\n'
                        + '\t1. Mauris auctor nunc ut diam dapibus pretium.\n'
                        + '\t2. Praesent pellentesque nisl et laoreet rutrum.\n'
                        + '\t3. Etiam ullamcorper ante eget hendrerit cursus.\n'
                        + '\t4. Maecenas ac lorem nec arcu ullamcorper vulputate vel vitae dolor.\n'
                        + '\t5. Ut sit amet lorem quis nisl dapibus volutpat non at dui.'

                }],
            }]
        }, {
            id: 'done',
            label: 'Done',
            cards: []
        }];
    }

    onRemoveBoardlist(boardlist: Boardlist) {
        this.confirmationService.confirm({
            key: this.uniqueIdPrefix,
            header: `Remove "${boardlist.label}" list`,
            message: `Are you sure that you want to remove "${boardlist.label}" list?`,
            acceptLabel: 'Remove',
            acceptIcon: 'pi pi-trash',
            acceptButtonStyleClass: 'p-button-text p-button-danger',
            rejectLabel: 'Cancel',
            rejectButtonStyleClass: 'p-button-text',
            accept: () => this.removeBoardlist(boardlist)
        });
    }

    onNewCard(boardlist: Boardlist) {
        const card: Card = {
            id: '',
            label: 'New card',
            description: '',
            assignees: [],
            attachments: [],
            comments: [],
            tasklists: [],
        };

        card.boardlist = {
            id: boardlist.id,
            label: boardlist.label,
        }

        this.editor.show(card)
    }

    onSaveCard(card: Card) {
        const boardlist = card.boardlist
            ? this.getBoardlistById(card.boardlist.id)
            : void 0;

        if (card.id) {
            const originalCard = this.selectedCard!;
            const originalBoardlist = this.getBoardlistById(originalCard.boardlist!.id);

            const i = originalBoardlist.cards.indexOf(originalCard);
            if (boardlist == originalBoardlist) {
                originalBoardlist.cards.splice(i, 1, card);
            } else {
                originalBoardlist.cards.splice(i, 1);
                if (boardlist) {
                    boardlist.cards.push(card);
                }
            }
        } else {
            // persistence
            card.id = this.idService.generateId();

            if (boardlist) {
                boardlist.cards.push(card);
            }
        }
    }

    onRemoveCard(card: Card) {
        this.confirmationService.confirm({
            key: this.uniqueIdPrefix,
            header: `Remove "${card.label}" card`,
            message: `Are you sure that you want to remove "${card.label}" card?`,
            acceptLabel: 'Remove',
            acceptIcon: 'pi pi-trash',
            acceptButtonStyleClass: 'p-button-text p-button-danger',
            rejectLabel: 'Cancel',
            rejectButtonStyleClass: 'p-button-text',
            accept: () => this.removeCard(card)
        });
    }

    onSelectCard(card: Card) {
        this.selectedCard = card;
        this.editor.show(structuredClone(card));
    }

    removeBoardlist(boardlist: Boardlist) {
        const index = this.boardlists.indexOf(boardlist);

        if (index >= 0)
            this.boardlists.splice(index, 1);
    }

    removeCard(card: Card) {
        const boardlist = this.getBoardlistById(card.boardlist!.id);

        if (!boardlist)
            return;

        const index = this.getCardIndexById(boardlist.cards, card.id);

        if (index >= 0) {
            boardlist.cards.splice(index, 1);

            console.log('a');
        }
    }

    getBoardlistById(id: string) {
        return this.boardlists.find(x => x.id == id)!;
    }

    getCardIndexById(cards: Card[], id: string) {
        return cards.findIndex(x => x.id == id)!;
    }

}
