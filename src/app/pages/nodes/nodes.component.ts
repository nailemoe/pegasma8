import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service'

class Node {

  id: string;
  type: string;
  state: string;
  startTime: Date;
  lastHeartbeat: Date;

  constructor(
    id: string,
    type: string,
    state: string,
    startTime: Date,
    lastHeartbeat: Date
  ) {
    this.id = id;
    this.type = type;
    this.state = state;
    this.startTime = startTime;
    this.lastHeartbeat = lastHeartbeat;
  }
}

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  //nodeList: Array<Node> = new Array();
  nodeList: Node[] = [];
  nodeList$: Object;

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.nodeService.getNodes().subscribe(
      nodesResponse => {
        this.nodeList$ = nodesResponse.body;
        let nodeList: any = this.nodeList$;

        let cluster: any = nodeList.data.result[0].cluster_members;
        cluster.forEach(el => {
          let node: Node = new Node(el.nodeId,
            el.node_type,
            el.running_state,
            el.starttime,
            el.last_heartbeat);
          this.nodeList.push(node);
        });
        this.nodeList = [...this.nodeList];
        console.log(this.nodeList);
      },
      nodesError => {
        console.log(nodesError.body);
      }
    );
  }
}
