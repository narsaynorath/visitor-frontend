import React, { useState } from 'react';

import Camera from 'react-html5-camera-photo';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ImagePreview from './ImagePreview';

import 'react-html5-camera-photo/build/css/index.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    maxWidth: '70vw',
    overflow: 'hidden',
  },
}));

const Capture = () => {
  const [dataUri, setDataUri] = useState(null);
  const classes = useStyles();

  const handleTakePhoto = dataUri => {
    console.log(dataUri);
    setDataUri(dataUri);
  };

  const clearPhoto = () => {
    setDataUri(null);
  };

  return (
    <div
      className={classes.container}
      style={{
        background: !dataUri ? 'black' : 'white',
      }}
    >
      {dataUri ? (
        <>
          <ImagePreview dataUri={dataUri} />
          <footer>
            <Button onClick={clearPhoto}>Retake</Button>
            <Button color="primary" variant="contained">
              Next
            </Button>
          </footer>
        </>
      ) : (
        <Camera
          onTakePhoto={dataUri => {
            handleTakePhoto(dataUri);
          }}
        />
      )}
    </div>
  );
};

export default Capture;
