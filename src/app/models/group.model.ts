import { Item } from './item.model';

export class Group {

    public id: number;
    public flexDirection: string;
    public flexWrap: string;
    public justifyContent: string;
    public alignItems: string;
    public items: Item[];

    constructor(
        flexDirection: string,
        flexWrap: string,
        justifyContent: string,
        alignItems: string) {
        this.flexDirection = flexDirection;
        this.flexWrap = flexWrap;
        this.justifyContent = justifyContent;
        this.alignItems = alignItems;
        this.items = [];
    }

}
