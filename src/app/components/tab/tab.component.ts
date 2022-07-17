import { Component, OnInit, Input } from '@angular/core';
import { Tab } from 'src/app/Tab'

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})


export class TabComponent implements OnInit {

  @Input()
  ids: string[] = [];
  @Input()
  contents: string[] = [];

  @Input() state = 'Tab'; //Exportando do dado para um Pai
  @Input() content = "Sem Conteúdo";

  @Input() onClick(id:number){
    this.content = this.contents[id]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
