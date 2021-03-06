import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[appHighLight]',
    host    : {
        '(mouseenter)' : 'onMouseEnter()',
        '(mouseleave)' : 'onMouseLeave()',
        '(mousedown)'  : 'onMouseDown()',
        '(mouseup)'    : 'onMouseUp()'
    }
})

export class HightLightDirective {
    private _activeColor = "red";

    @Input() hoverColor:string;
    @Input() set activeColor(colorName:string) {
        this._activeColor = colorName || this._activeColor;
    }

    private originalBackground;

    constructor(private el:ElementRef) {
        this.originalBackground = el.nativeElement.style.backgroundColor;
    }

    onMouseEnter() {
        this.setBackgroundColor(this.hoverColor);
    }

    onMouseLeave() {
        this.setBackgroundColor(this.originalBackground);
    }

    onMouseDown() {
        this.setBackgroundColor(this.originalBackground);
    }

    onMouseUp() {
        this.setBackgroundColor(this.originalBackground);
    }

    setBackgroundColor(color:string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}