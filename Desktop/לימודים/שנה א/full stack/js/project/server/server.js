const server = (url, callbackFunc = () => { }) => {

    $.ajax({
        url,
        success: (result) => {
            callbackFunc(result);
        }
    });
}