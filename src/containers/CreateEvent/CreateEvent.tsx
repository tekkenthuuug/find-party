import React from 'react';
import Form from '../../components/Form/Form';
import { Section } from '../../types/types';
import { useFormik } from 'formik';

const sections: Section[] = [
  {
    title: 'Main information',
    fields: [
      { placeholder: 'Event title', name: 'title' },
      { placeholder: 'Contact', name: 'contact' },
      { placeholder: 'Event description', name: 'description' }
    ]
  },
  {
    title: 'Location information',
    fields: [
      { placeholder: 'Country', name: 'country' },
      { placeholder: 'City', name: 'city' }
    ]
  },
  {
    title: 'Access settings',
    fields: [
      { placeholder: 'Subscribers', name: 'subs', dropdown: ['Enroll', 'None'] },
      { placeholder: 'Logined users', name: 'logUser' },
      { placeholder: 'Anonymous users', name: 'anonUser' }
    ]
  }
];

interface IFormik {
  title: string;
  contact: string;
  description: string;
  country: string;
  city: string;
  subs: string;
  logUser: string;
  anonUser: string;
}

// const validateBase = () => {
//   const errors = {
//     title: '',
//     contact: '',
//     description: '',
//     country: '',
//     city: '',
//     subs: '',
//     logUser: '',
//     anonUser: ''
//   };

//   return errors;
// };

const CreateEvent: React.FC = () => {
  const formik = useFormik<IFormik>({
    initialValues: {
      title: '',
      contact: '',
      description: '',
      country: '',
      city: '',
      subs: '',
      logUser: '',
      anonUser: ''
    },
    onSubmit: (props, { setSubmitting }) => {
      console.log(props);
      setSubmitting(false);
    }
  });
  return <Form formik={formik} headTitle="Create your own event!" submitButtonText="Create" sections={sections} />;
};

export default CreateEvent;
