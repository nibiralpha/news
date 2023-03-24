const generateQS = (object: any): string => {
    let vals = []
    for (const key in object) {
        if (object[key] != "") {
            vals.push(key + "=" + object[key])
        }
    }
    return vals.join("&")
}

const stripHTML = (str: string) => {
    return str.replace(/<[^>]*>?/gm, '');
}

const generateUrlFriendlyID = (id: string): string => {
    if (id === undefined) return ''
    return id.split("/").join("_")
}

const generateGurdienIDFromUrlId = (id: string): string => {
    if (id === undefined) return ''
    return id.split("_").join("/")
}


export { generateQS, stripHTML, generateUrlFriendlyID, generateGurdienIDFromUrlId }