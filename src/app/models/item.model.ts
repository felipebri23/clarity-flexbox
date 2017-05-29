export class Item {

    public text: string;
    public type: string;
    public size: number;
    public order: number;
    public flexGrow: number;
    public flexShrink: number;
    get flexBasis(): number {
      return (this.size * 100) / 12;
    }

    public static empty(): Item {
        return new Item('', 'text', 2, 0, 0, 0);
    }

    constructor(
        text: string,
        type: string,
        size: number,
        order: number,
        flexGrow: number,
        flexShrink: number) {
        this.text = text;
        this.type = type;
        this.size = size;
        this.order = order;
        this.flexGrow = flexGrow;
        this.flexShrink = flexShrink;
    }
}
