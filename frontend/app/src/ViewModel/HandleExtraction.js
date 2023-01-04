import Post_Extraction from '../Model/Post_Extraction_API';
import { message } from 'antd';


export default async function HandleAntd_Post_Extraction(imageFile){
    if(imageFile === undefined){
        message.warning("請先選擇檔案");
        let error = new Error('Non File Error?')
        throw  error;
    }else{
        imageFile = imageFile[0].originFileObj;
        var returnRes = await Post_Extraction(imageFile);
        var returnText = await returnRes.text()
        returnText = JSON.parse(returnText)
        if(returnText.Status === "Success"){
            return returnText;
        }else{
            const Msg = returnText.Msg;
            message.warning(Msg);
            let error = new Error(Msg)
            throw  error;
        }
        
    }
    
}