import React, { useState } from 'react';
import { Form, Formik } from 'formik';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import SidePanel from './SidePanel';

const useStyles = makeStyles({
  formFooter: {
    marginTop: '1em',
    textAlign: 'right',
  },
});

const MultiStepFormStep = ({ children }) => children;

const MultiStepForm = ({
  children,
  initialValues,
  onSubmit,
  stepLabels,
  sidePanelHeader,
}) => {
  const classes = useStyles();
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = values => {
    setSnapshot({ ...values, nextForm: stepNumber });
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  // const previous = values => {
  //   setSnapshot(values);
  //   setStepNumber(Math.max(stepNumber - 1, 0));
  // };

  const handleSubmit = (values, bag) => {
    if (isLastStep) {
      return onSubmit(values);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <>
      <SidePanel
        header={sidePanelHeader}
        steps={stepLabels}
        activeStep={stepNumber}
      />
      <Formik
        enableReinitialize
        initialValues={snapshot}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {step}
            <footer className={classes.formFooter}>
              <Link to="/">
                <Button color="primary">Cancel</Button>
              </Link>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                type="submit"
              >
                {isLastStep ? 'Submit' : 'Next'}
              </Button>
            </footer>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { MultiStepForm, MultiStepFormStep };
