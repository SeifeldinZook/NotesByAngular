import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  baseURL="https://routeegypt.herokuapp.com/"

  constructor(private _HttpClient:HttpClient) {}

  getAllNotes(data):Observable<any>
  {
    return this._HttpClient.post(this.baseURL+'getUserNotes',data)
  }

  addNoteToDB(data):Observable<any>
  {
    return this._HttpClient.post(this.baseURL+'addNote',data)
  }

  updateNoteInDB(data):Observable<any>
  {
    return this._HttpClient.put(this.baseURL+'updateNote',data)
  }

  deleteNoteFromDB(data):Observable<any>
  {
    let options={
      headers:new HttpHeaders({

      }),
      body:{
        NoteID:data.NoteID,
        token:data.token
      }
    }
    return this._HttpClient.delete(this.baseURL+'deleteNote',options)
  }
}
