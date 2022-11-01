import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Refactory } from 'src/app/model/refactory.model';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  @ViewChild("Principal") Principal: ElementRef | undefined;
  @ViewChild("drag1") node1: ElementRef | undefined;
  @ViewChild("drag2") node2: ElementRef | undefined;
  @ViewChild("drag3") node3: ElementRef | undefined;
  @ViewChild("drag4") node4: ElementRef | undefined;
  @ViewChild("drag5") node5: ElementRef | undefined;

  public refractory: Refactory = this.InizializateRefractory();
  public refractorys: Refactory[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  public GetValues() { 
    this.refractorys = [];
    for (let index = 0; index < this.Principal?.nativeElement.childNodes.length; index++) {
      const element = this.Principal?.nativeElement.childNodes[index].childNodes;
      element.forEach((elementChild:any) => {
        console.log(elementChild.innerText)
        console.log(elementChild.childNodes[0].getBoundingClientRect())
        this.SetRefractory(elementChild.childNodes[0].getBoundingClientRect(),elementChild.innerText);
      });
      console.log(element);
    }
    console.log(this.refractorys);
  }

  private SetRefractory(bunding: any, name: any) {
    this.refractory = this.InizializateRefractory();
    this.refractory.id = name;
    this.refractory.configX = bunding.x;
    this.refractory.configY = bunding.y;
    this.refractorys.push(this.refractory);
  }
  
  private InizializateRefractory(): Refactory {
   return {
     id: '',
     configX:'',
     configY:''
   }
  }

}
