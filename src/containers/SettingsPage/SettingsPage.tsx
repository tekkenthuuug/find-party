import React, { useEffect } from 'react';
import Form from '../../components/Form/Form';
import { useFormik } from 'formik';
import { Section, IBaseValidation } from '../../types/types';

const sections: Section[] = [
  {
    fields: [{ placeholder: 'Description', name: 'description', twoColumns: true, multiline: 6 }]
  }
];

const validate = (values: IBaseValidation) => {
  const errors = {
    description: ''
  };
  const { description } = values;
  if (description.length > 265) {
    errors.description = 'Description length must be 265 or less characters';
  } else {
    delete errors.description;
  }

  return errors;
};

const SettingsPage: React.FC<{ userID: string }> = ({ userID }) => {
  const formik = useFormik({
    initialValues: {
      description: ''
    },
    validate: (values) => validate(values),
    onSubmit: ({ description }, { setSubmitting }) => {
      fetch(`http://localhost:8000/api/users/settings`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userID,
          description
        })
      })
        .then((r) => r.json())
        .then((data) => {
          setSubmitting(false);
        });
    }
  });

  useEffect(() => {
    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((r) => r.json())
      .then(({ description }) => {
        formik.setValues({ description });
      });
    // eslint-disable-next-line
  }, [userID]);

  return <Form headTitle="Profile settings" sections={sections} submitButtonText={'Apply'} formik={formik} />;
};

export default SettingsPage;
