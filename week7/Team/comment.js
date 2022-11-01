import { getComment, saveComment } from   './ls.js';
import { renderOneHikeFull } from   './hikes.js';



export default class Comment{
    constructor(hike){
        //this.getAllComment();
        this.comments =  getComment();   
        this.hike = hike;
        
    }

    getHikeComments(hike){
        let commentContainer = document.createElement("ul");
        this.comments.forEach( comment =>{
            if(comment.type == hike){
                comment.listOfComments.forEach(
                    myComments =>{
                        let li = document.createElement("li");
                        li.innerHTML = `
                        <p>${myComments.name}</p>
                        <p>${myComments.comment}</p>
                        `
                        commentContainer.appendChild(li);
                        }
                    ); }     
          }
        );
        return commentContainer;
    }

    saveHikeComments(name,message,hike){
        
        console.log(`${name} ${message}`);
        this.comments.forEach( comment =>{
            if(comment.type == hike){
                comment.listOfComments.push({
                    name: name,
                    comment: message
    
                }) }     
          }
        );
        saveComment(this.comments);                
    }

    



    



}