import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UploadImage from '../../Components/UploadImage';
import Handle_Post_Embedding from '../../ViewModel/HandleExtraction';
import Box from '@mui/material/Box';
import { message } from 'antd';

export default function AddressForm(props) {
  const [ImgfileList, setImgFileList] = useState();
  const setActiveStep = props.setActiveStep;
  const setRetData = props.setRetData;


  const  handleUpload = () => {
    setActiveStep(1);
    Handle_Post_Embedding(ImgfileList)
      .then((retData) => { 
        if(retData.Status === "Success") {
          setActiveStep(2);
          setRetData(retData)
        }else{
          setActiveStep(0);
          message.error("檔案上傳錯誤");
        }
      }).catch((error)=>{
        console.log(error);
        setActiveStep(0);
        message.error("檔案上傳錯誤");
      })
  };

  return (
    <>
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          上傳圖片 Upload File
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <UploadImage getValue={setImgFileList} upload_str="選擇圖片" listType={"picture"} accept={["image/png", "image/jpeg", "image/bmp", "image/tiff"]} />
          </Grid>
        </Grid>
      </React.Fragment >
      <React.Fragment>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            onClick={handleUpload}
            sx={{ mt: 3, ml: 1 }}
          >
            Next
          </Button>
        </Box>
      </React.Fragment>
    </>

  );
}