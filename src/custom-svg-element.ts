export class CustomSVGElement {

    private attributes: {} = null;

    private children: CustomSVGElement[] = [];

    private innerText: string = null;

    private styles: {} = null;

    constructor(
        public tag: string,
    ) {

    }

    public static create(tag: string): CustomSVGElement {
        const element: CustomSVGElement = new CustomSVGElement(tag);

        if (tag === 'svg') {
            element.attr('xmlns', 'http://www.w3.org/2000/svg');
        }

        return element;
    }

    public append(tag: string): CustomSVGElement {
        const element: CustomSVGElement = CustomSVGElement.create(tag);

        this.children.push(element);

        return element;
    }

    public attr(name: string, value: string | number): CustomSVGElement {
        if (!this.attributes) {
            this.attributes = {};
        }

        this.attributes[name] = value;

        return this;
    }

    public style(name: string, value: string | number): CustomSVGElement {
        if (!this.styles) {
            this.styles = {};
        }

        this.styles[name] = value;

        return this;
    }

    public text(value: string): CustomSVGElement {
        this.innerText = value;

        return this;
    }

    public toString(): string {
        return `<${this.tag}${this.attributesToString()}${this.stylesToString()}>${this.innerTextToString()}${this.childrenToString()}</${this.tag}>`;
    }

    private attributesToString(): string {
        return this.attributes ? ` ${Object.keys(this.attributes).map((key) => `${key}="${this.attributes[key]}"`).join(' ')}` : '';
    }

    private childrenToString(): string {
        return this.children.map((element) => element.toString()).join('');
    }

    private innerTextToString(): string {
        return this.innerText ? this.innerText : '';
    }

    private stylesToString(): string {
        return this.styles ? ` style="${Object.keys(this.styles).map((key) => `${key}: ${this.styles[key]}`).join(';')}"` : '';
    }
}
