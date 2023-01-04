import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
export default function PaymentForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3} marginTop="30px">
        <Grid item xs={12} textAlign="center">
          <Spin indicator={antIcon} />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom textAlign="center" marginTop="30px">
        等待圖片處理 wait .....
      </Typography>
    </React.Fragment>
  );
}