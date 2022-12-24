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


export { fetchPostData };