import React from 'react';

import Camera from 'react-html5-camera-photo';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ImagePreview from './ImagePreview';

import 'react-html5-camera-photo/build/css/index.css';
import './capture.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '70vw',
    overflow: 'hidden',
  },
}));

const Capture = ({ form: { setFieldValue, values } }) => {
  const classes = useStyles();

  const handleTakePhoto = dataUri => {
    setFieldValue('picture', dataUri);
    document.getElementById('temp').value = 'temp';
  };

  const clearPhoto = () => {
    setFieldValue('picture', '');
    document.getElementById('temp').value = '';
  };

  return (
    <div className={classes.container}>
      <input id="temp" style={{ visibility: 'hidden' }} required></input>
      {values.picture ? (
        <>
          <ImagePreview dataUri={values.picture} />
          <footer>
            <Button onClick={clearPhoto}>Retake</Button>
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
