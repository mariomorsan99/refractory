import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FlowShape, FlowShapeModel, NodeModel } from '@syncfusion/ej2-angular-diagrams';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.css']
})
export class SyncComponent implements OnInit {
  public terminatorShape: FlowShapeModel = { type:'Flow', shape:'Terminator'};
  public directdata: FlowShapeModel = { type: 'Flow', shape: 'DirectData' };
  public process: FlowShapeModel = { type: 'Flow', shape: 'Process' };
  @ViewChild("node10") node1: ElementRef | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  public GetValues() { 
    console.log(this.node1?.nativeElement.getBoundingClientRect()) 
  }

}
