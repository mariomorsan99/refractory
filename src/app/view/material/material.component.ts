import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Refactory } from 'src/app/model/refactory.model';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
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
    this.SetRefractory(this.node1?.nativeElement.getBoundingClientRect());
    this.SetRefractory(this.node2?.nativeElement.getBoundingClientRect());
    this.SetRefractory(this.node3?.nativeElement.getBoundingClientRect());
    this.SetRefractory(this.node4?.nativeElement.getBoundingClientRect());
    this.SetRefractory(this.node5?.nativeElement.getBoundingClientRect());
    console.log(this.refractorys);
  }

  private SetRefractory(bunding: any) {
    this.refractory = this.InizializateRefractory();
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
