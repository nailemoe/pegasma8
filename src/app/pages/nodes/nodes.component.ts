import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service'

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.nodeService.getNodes().subscribe(
      nodesResponse => {
        console.log(nodesResponse.body);
      },
      nodesError => {
        console.log(nodesError.body);
      }
    );
  }

}
