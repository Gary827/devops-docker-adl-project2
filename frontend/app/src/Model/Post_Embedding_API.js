export default async function Post_Embedding(imageFile, txtFile) {
    var formdata = new FormData();
    formdata.append("imageFile", imageFile);
    formdata.append("txtFile", txtFile);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        headers: new Headers({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
        }),
        redirect: 'follow'
    };

    return await fetch(process.env.REACT_APP_API_Server+"/Embedding/upload", requestOptions)
}

