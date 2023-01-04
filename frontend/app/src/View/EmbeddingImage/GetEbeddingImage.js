import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from '../../Components/Image';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export default function Review(props) {
  const retData = props.retData;
  const url = process.env.REACT_APP_API_Server;
  const src = url + retData.src;
  const src_download = url + (retData.src == null ? "" : retData.src.replace("/Image/", "/DownloadImage/"));
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Get Embedding Image
      </Typography>
      <Grid container spacing={3} marginTop="30px">
        <Grid item xs={12} textAlign="center">
          <Image
            width={200}
            src={src}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button type="primary" shape="round" icon={<DownloadOutlined />} href={src_download} size={"large"} >
            Download
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}