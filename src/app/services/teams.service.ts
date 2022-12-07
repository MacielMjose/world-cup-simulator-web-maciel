import { Injectable } from '@angular/core';
import { Team } from '../models/Team';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  apiUrl ='https://localhost:7153/api/teams/groups';
  
  constructor(private httpClient : HttpClient) { }

  public getGroups(){
    return this.httpClient.get<Team[][]>(this.apiUrl);
  }
}
