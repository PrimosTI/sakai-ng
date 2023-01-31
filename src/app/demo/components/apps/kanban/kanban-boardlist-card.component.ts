import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Card, TaskList } from './api/kanban';

@Component({
    selector: 'app-KanbanBoardlistCard',
    templateUrl: './kanban-boardlist-card.component.html',
    styleUrls: [ './kanban-boardlist-card.component.scss' ]
})
export class KanbanBoardlistCardComponent implements OnInit {

    @Input()
    card!: Card;

    @Output()
    removeCard: EventEmitter<void> = new EventEmitter();

    cardMenu!: MenuItem[];

    ngOnInit(): void {
        this.cardMenu = [
            { label: 'Copy card' },
            {
                label: 'Move card...',
                items: [
                    { label: 'Copy list' },
                    { label: 'Remove list' }
                ]
            }, {
                label: 'Delete card',
                command: () => {
                    console.log('delete clicked')
                }
            },
        ];
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
