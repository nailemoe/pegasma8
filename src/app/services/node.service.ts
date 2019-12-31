import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpClientModule, HttpResponse} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { endpoints } from './endpoints';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  
  constructor(private http: HttpClient) { }

  nodeURL = endpoints.BASEURL + endpoints.NODES;

  getNodes() {
    let nodeParams = new HttpParams();
    let nodeHeaders = new HttpHeaders();
    //const encodedUser = localStorage.getItem("encodedUser");

    //assignmentHeaders = assignmentHeaders.append('Authorization', 'Basic ' + encodedUser);
    nodeHeaders = nodeHeaders.append('Content-Type', "application/json");

    return this.http.get(this.nodeURL,
      { observe: 'response', params: nodeParams, headers: nodeHeaders});
  }

  getDataConfigs(nodeID: string) {

  }
}