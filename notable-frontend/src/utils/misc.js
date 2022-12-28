const fetchPostData = async (url, formData, headers = {}) => {
    const successCodes = [200, 201, 203];
    let response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: headers
    });

    let data = await response.json();
    return successCodes.includes(response.status) ? [true, data] : [false, data];
}


const waitTime = (ele, callback, timeOut = 1000) => {
    let timer;
    ele.current.onkeyup = () => {
        clearTimeout(timer);
        // TODO: Save Todo
        timer = setTimeout(() => {
            callback();
        }, timeOut);
    }
}

export { fetchPostData, waitTime };