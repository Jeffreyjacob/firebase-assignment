import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData,onSnapshot} from '@angular/fire/firestore'

import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IncidentServiceService {

  constructor(private firestore: Firestore) { }

  createIncident(
    name: string,
    TypeOfInicdent: string,
    briefDescription: string,
    locatonOfIncident: string
  ){
    return addDoc(collection(this.firestore,'mycollection'),{
      name,
      TypeOfInicdent,
      briefDescription,
      locatonOfIncident,

    })   
  }
 
}