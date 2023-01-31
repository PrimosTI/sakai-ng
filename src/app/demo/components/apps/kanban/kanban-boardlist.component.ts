import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Boardlist, Card } from './api/kanban';

@Component({
    selector: 'app-KanbanBoardlist',
    templateUrl: './kanban-boardlist.component.html',
    styleUrls: [ './kanban-boardlist.component.scss' ]
})
export class KanbanBoardlistComponent implements OnInit {

    @Input()
    boardlist!: Boardlist;

    @Input()
    dropListId!: string;

    @Input()
    dropListConnectedTo!: string[];

    @Output()
    newCard: EventEmitter<void> = new EventEmitter();

    @Output()
    selectCard: EventEmitter<Card> = new EventEmitter();

    @Output()
    removeList: EventEmitter<void> = new EventEmitter();

    @Output()
    removeCard: EventEmitter<Card> = new EventEmitter();

    listMenu!: MenuItem[];

    ngOnInit(): void {
        this.listMenu = [
            {
                label: 'List actions',
                items: [
                    { separator: true },
                    { label: 'Copy list' },
                    { label: 'Remove list' }
                ]
            }
        ]
    }

    onCardClick($event: Event, card: Card) {
        const target = $event.target;

        if (target instanceof HTMLElement) {
            if(target instanceof HTMLButtonElement || isDescendantOfType(target, HTMLButtonElement)) {
                return;
            }
        }

        this.selectCard.emit(card);
    }

    onDropCard($event: CdkDragDrop<Boardlist, Boardlist, Card>) {
        const source = $event.previousContainer.data;
        const target = $event.container.data;

        $event.item.data.boardlist = {
            id: target.id,
            label: target.label
        }

        transferArrayItem(
            source.cards,
            target.cards,
            $event.previousIndex,
            $event.currentIndex
        );
    }

}

function isDescendantOfType(child: Node, type: Type<Node>) {
    return isDescendantOf(child, (x) => x instanceof type)
}

function isDescendantOf(child: Node, predicate: (node: Node) => boolean) {
    let node: Node | null = child;
    while (node != null) {
        if (predicate(node)) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
