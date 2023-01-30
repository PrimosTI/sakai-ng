import { NgIdConfig } from './ng-id.config';

export class NgIdService {

    private prefix: string;
    private currentId: number = 1;

    constructor (config: NgIdConfig) {
        this.prefix = config.prefix ?? 'ng-id-';
    }

    generateId() {
        return this.prefix + (this.currentId++).toString(36);
    }

}
