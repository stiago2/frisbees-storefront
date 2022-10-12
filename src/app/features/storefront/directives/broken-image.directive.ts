import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[missingImage]',
})
export class MissingImageDirective {
  constructor(private element: ElementRef) {}

  @HostListener('error')
  displayFallbackImg() {
    this.element.nativeElement.src = 'assets/img/broken-image.jpg';
  }
}
