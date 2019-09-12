export let OnlineStatus = {
    NONE: 0,
    PART: 1,
    ALL: 2,
}

export function getOnlineStatus(online_num, total_num){
    if(online_num==0)
        return OnlineStatus.NONE
    else{
        if(online_num < total_num)
            return OnlineStatus.PART
        else if(online_num == total_num)
            return OnlineStatus.ALL
    }
    return null
}

export function getOnlineStyleClass(online_num, total_num){
    let status = getOnlineStatus(online_num, total_num)
    if(status==OnlineStatus.NONE)
        return 'border-none'
    else if(status==OnlineStatus.PART)
        return 'border-part'
    else if(status==OnlineStatus.ALL)
        return 'border-all'
    return null
}

