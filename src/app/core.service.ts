import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor() { }
  saveArticle(article: any) {
    localStorage.setItem('article',JSON.stringify(article))
    return true;
  }
  getArticle() {
    debugger
    let arc = JSON.parse(localStorage.getItem('article'));
    return arc;
  }

  saveUsers(users: any) {
    localStorage.setItem('users',JSON.stringify(users))
    return true;
  }
  getUserList() {
    let arc = JSON.parse(localStorage.getItem('users'))
    return arc;
  }
  getUser(id:any) {
    let users = JSON.parse(localStorage.getItem('users'))
    //let user = users.f
    return users;
  }

  saveRevision(rev: any) {
    debugger
    localStorage.setItem('revision',JSON.stringify(rev))
    return true;
  }
  getRevisionList() {
    debugger
    let arc = JSON.parse(localStorage.getItem('revision')) ||[]
    return arc;
  }
 async getRevisionListAsync() {
    debugger
    let arc = JSON.parse(localStorage.getItem('revision')) ||[]
    return Promise.resolve(arc);
  }

  saveSuggestion(rev: any) {
    debugger
      localStorage.setItem('suggetion',JSON.stringify(rev))
   
   
    return true;
  }
  getSuggetionList() {
    debugger
    let arc = JSON.parse(localStorage.getItem('suggetion'),) 
    return arc;
  }

  saveComment(com: any) {
    debugger
      localStorage.setItem('comment',JSON.stringify(com))
    return true;
  }
 getCommentList() {
    debugger
    let com = JSON.parse(localStorage.getItem('comment'),) 
    return com;
  }
  
  
  
  // findById(id: number) {
  //   return this.http.get(`${ApiUrls.ClientFindById}/${id}`);
  // }
  // findByClientIdContactNo(clientId: number,contactNo:number) {
  //   return this.http.get(`${ApiUrls.OnContact}?clientId=${clientId}&contactNo=${contactNo}`);
  // }
  // onSpotStatus(clientId: number,contactNo:number) {
  //   return this.http.get(`${ApiUrls.OnSpotStatus}?clientId=${clientId}&contactNo=${contactNo}`);
  // }

  // paging(page: IPaging, clientId: number, searchText: string, orderBy: string, orderType: string, saveResultsCallback: (doc: any) => void) {
  //   return this.http.get(`${ApiUrls.ClientContactPagination}?page=${page.CurrentPage}&pageSize=${page.PageSize}&clientId=${clientId}&searchText=${searchText}&orderBy=${orderBy}&orderType=${orderType}`).pipe(
  //   ).subscribe((doc: any) => {
  //     saveResultsCallback(doc);
  //   });
  // }

}
