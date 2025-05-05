/*this file contains functions that work with messages*/

export function getUnreadMessages(messages,userId){

    // filter out unseen messages the belong to the current user
    let unread = messages.filter((item)=>{
        return item.seen === false && item.to === userId
    });

    console.log(unread.length)

    return unread.length

}