import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class WelcomeService {
  //card: any;

  //onCardChanged: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
  }

  getGenes(uniprotId: string): Observable<any> {

    return this.http.get(environment.apiUrl + 'search/' + uniprotId);
  }

  
}