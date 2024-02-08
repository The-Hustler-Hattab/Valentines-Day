import { Component, Renderer2, HostBinding } from '@angular/core';

@Component({
  selector: 'app-part-three',
  templateUrl: './part-three.component.html',
  styleUrls: ['./part-three.component.scss']
})
export class PartThreeComponent {
  constructor() { }
  
  ngOnInit(): void {
    const el = document.querySelectorAll("span");
    for (let i = 0; i < el.length; i++) {
      el[i].setAttribute("style", `transform: rotate(${i * 20}deg)`);
    }
  }
}
