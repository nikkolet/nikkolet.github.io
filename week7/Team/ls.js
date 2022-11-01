
const myListOfComments = [
    {
        type: "Bechler Falls",
        listOfComments: [
            {
                name: "Marcos",
                comment: "Nice Hike!"

            },
            {
                name: "John",
                comment: "Nice Hike!"

            }]
    }, 
    {
        type: "Teton Canyon",
        listOfComments: [
            {
                name: "Ane",
                comment: "Nice Hike!"

            }]
    },
    {
        type: "Denanda Falls",
        listOfComments: [
            {
                name: "Matheus",
                comment: "Nice Hike!"
            }]
    }
]

function getComment(){
    if (localStorage.getItem("comment") === null){
        return myListOfComments;
    } else {
        return JSON.parse(localStorage.getItem("comment"));
    }
}

function saveComment(comment){
    return localStorage.setItem("comment",JSON.stringify(comment));
}

export { getComment, saveComment}
