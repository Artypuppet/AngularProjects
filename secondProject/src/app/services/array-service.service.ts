import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ArrayServiceService {
    arrayToShare =  [
        {id: 1, name: "A"}
    ]
    constructor() { }
}
