import * as React from 'react';
import TypographyMui from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Typography } from 'antd';

const { Paragraph } = Typography;

export default function Review(props) {
  const retData = props.retData;
  // console.log(retData)
  const secret = retData.Secret;
  return (
    <React.Fragment>
      <TypographyMui variant="h5" gutterBottom>
        <u>Get Secret</u>
      </TypographyMui>

      <Grid container spacing={3} >
        <Grid item xs={12} >
          <Paragraph>
            <pre>{secret}</pre>
          </Paragraph>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}