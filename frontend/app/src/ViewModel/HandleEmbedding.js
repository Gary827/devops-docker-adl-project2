import Post_Embedding from '../Model/Post_Embedding_API';
import { message } from 'antd';


export default async function HandleAntd_Post_Embedding(imageFile,txtFile){
    if(imageFile === undefined || txtFile === undefined){
        message.warning("請先選擇檔案");
        let error = new Error('Non File Error?')
        throw  error;
    }else{
        imageFile = imageFile[0].originFileObj;
        txtFile = txtFile[0].originFileObj;
        var returnRes = await Post_Embedding(imageFile,txtFile);
        var returnText = await returnRes.text()
        // console.log("returnData",JSON.parse(returnText))
        return JSON.parse(returnText);

    }
    
}