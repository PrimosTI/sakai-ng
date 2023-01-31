export interface BoardlistRef {
    id: string;
    label: string;
}

export interface Boardlist extends BoardlistRef {
    cards: Card[];
}

export interface Card {
    id: string;
    label: string;
    description: string;
    startDate?: Date;
    dueDate?: Date;
    boardlist?: BoardlistRef;
    assignees: Person[];
    tasklists: TaskList[];
    attachments: Attachment[];
    comments: Comment[];
}


export interface Person {
    name: string;
    avatar?: string;
}

export interface Attachment {}

export interface TaskList {
    label: string;
    tasks: Task[];
}

export interface Task {
    description: string;
    done: boolean;
}

export interface Comment {
    author: Person;
    date: Date;
    content: string;
}
