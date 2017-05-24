export class Item {

    public text: string;
    public type: string;
    public size: number;
    public order: number;
    public flexGrow: number;
    public flexShrink: number;
    public flexBasis: number;

    public static empty(): Item {
        return new Item('', 'text', 2, 0, 0, 0, 0);
    }

    constructor(
        text: string,
        type: string,
        size: number,
        order: number,
        flexGrow: number,
        flexShrink: number,
        flexBasis: number) {
        this.text = text;
        this.type = type;
        this.size = size;
        this.order = order;
        this.flexGrow = flexGrow;
        this.flexShrink = flexShrink;
        this.flexBasis = flexBasis;
    }
}
