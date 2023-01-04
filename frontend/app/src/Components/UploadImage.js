import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';
// import type { UploadFile } from 'antd/es/upload/interface';

// const fileList_2: UploadFile[] = [
// {
//     uid: '0',
//     name: 'xxx.png',
//     status: 'uploading',
//     percent: 33,
// },
// {
//     uid: '-1',
//     name: 'yyy.png',
//     status: 'done',
//     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
// }
// {
//     uid: '-2',
//     name: 'zzz.png',
//     status: 'error',
// },
// ];


function App(props) {
    // console.log(props)

    // const upload_url = props.upload_url
    const upload_str = props.upload_str
    const getValue = props.getValue
    const listType = props.listType
    const accept = props.accept
    const [fileList, setFileList] = useState([])
    // const [fileList, setFileList] = useState(fileList_2)
    // const [action, setAction] = useState([...])

    const handleChage = (info) => {
        console.log(info)
        if (info.file.uid != 0) {
            info.file.status = "done";
            let fileList = [...info.fileList];

            fileList = fileList.slice(-1);
            getValue(fileList);
            // console.log(fileList)
            setFileList(fileList);
        }


    }

    const beforeUpload = (info) => {
        //文件类型校验
        const fileType = info.type;
        // console.log(accept)
        var flag = 1
        for(var type in accept){
            // console.log(accept[type])
            if (fileType === accept[type]) {
                flag = 0
            }
        }
        if(flag === 1){
            info.uid = 0 
            message.error(`上傳失敗`);
        }
        return false;
    }
    // const beforeUpload = (file: any) => {
    //     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    //     if (!isJpgOrPng) {
    //       message.error('You can only upload JPG/PNG file!');
    //     }
    //     const isLt2M = file.size / 1024 / 1024 < 2;
    //     if (!isLt2M) {
    //       message.error('Image must smaller than 2MB!');
    //     }
    //     return isJpgOrPng && isLt2M;
    //   };


    return (<>
        <Upload
            // action={upload_url} //上傳檔案的路徑
            listType={listType == null ? [] : listType}
            fileList={fileList}
            onChange={handleChage}
            beforeUpload={beforeUpload}
        >
            <Button icon={<UploadOutlined />}>{upload_str}</Button>
        </Upload>
        <br />
    </>
    );
}


export default App;