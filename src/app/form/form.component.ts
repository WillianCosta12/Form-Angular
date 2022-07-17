import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { profyle } from '../profyle';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() num = "1"; 
  @Input() titulos: string[] = [];
  @Input() conteudos: string[] = [];
  @Input() titulosF: string[] = [];
  @Input() conteudosF: string[] = [];
  @Input()
  array = [1];
  @Input() count = 1;
  @Input() erro = false;

  editNum(event:any) {
    this.num = event.target.value;
    let rows = [];
    let aux = parseInt(this.num)
    for (let i = 0; i < aux; i++) {
    rows.push(i);
    }
    this.array = rows;
  }

  changeTitle(event:any, index:number) {
    this.titulos[index] = event.target.value
  }

  changeContent(event:any, index:number) {
    this.conteudos[index] = event.target.value
  }

  cadastro(){
          this.count = 0;
          
          for (let i = 0; i < parseInt(this.num); i++) {
            if (!this.titulos[i]) {
              this.erro = true;
              this.count = this.count + 1;
            }
            if (!this.conteudos[i]) {
              this.erro = true;
              this.count = this.count + 1;
            }
          }

          if(this.count == 0){
            this.titulosF = this.titulos
            this.conteudosF = this.conteudos
          }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
