import { TODOS_URL } from '../config';
import Model from './Model';

export default class Collection {
    constructor() {
        console.log('init collection');
    }    
    
        fetch(){
            return fetch(TODOS_URL)
            .then(resp => resp.json())
            .then(data => this.setData(data));
        } 

        setData(data){
            this.list = data.map(item =>new Model(item));
            console.log(this.list);
        }
    
}