import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Refactory } from 'src/app/model/refactory.model';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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
  @ViewChild("imagen") imagen: ElementRef | undefined;
  private currentScreenSize: string = '';
  destroyed = new Subject<void>();
 
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  public refractory: Refactory = this.InizializateRefractory();
  public refractorys: Refactory[] = [];
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          console.log(this.currentScreenSize);
          console.log(this.node1?.nativeElement);
        }
      }
    });

  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseHover(eventData: Event) {
    console.log(eventData);
    
  }

  public GetValues() { 
    this.refractorys = [];
    for (let index = 0; index < this.Principal?.nativeElement.childNodes.length; index++) {
      const element = this.Principal?.nativeElement.childNodes[index].childNodes;
      element.forEach((elementChild:any) => {
        this.SetRefractory(elementChild.childNodes[0].getBoundingClientRect(),elementChild.innerText);
      });
    }
  }

  private SetRefractory(bunding: any, name: any) {
    let elem = document.elementFromPoint(bunding.x, bunding.y);
    if (elem?.tagName === "IMG") {
      this.refractory = this.InizializateRefractory();
      this.refractory.id = name;
      this.refractory.configX = bunding.x;
      this.refractory.configY = bunding.y;
      this.refractorys.push(this.refractory);
    }
  }

  drop(event: any) {
    console.log(event)
  }

  showCoords(event: any) {
    var x = event.clientX;
    var y = event.clientY;
    console.log( "X: " + x + ", Y: " + y);
    let elem = document.elementFromPoint(x, y);
    console.log(elem)
  }
  
  private InizializateRefractory(): Refactory {
   return {
     id: '',
     configX:'',
     configY:''
   }
  }

}
