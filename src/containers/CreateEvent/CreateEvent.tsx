import React, { useContext } from 'react';
import Form from '../../components/Form/Form';
import { Section, IBaseValidation } from '../../types/types';
import { useFormik } from 'formik';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
import { SERVER_URL } from '../../vars';

const sections: Section[] = [
  {
    title: 'Main information',
    fields: [
      { placeholder: 'Event title', name: 'title' },
      { placeholder: 'Contact', name: 'contact' }
    ]
  },
  {
    title: 'Additional info',
    fields: [{ placeholder: 'Event description', name: 'description', twoColumns: true, multiline: 6 }]
  },
  {
    title: 'Location information',
    fields: [
      { placeholder: 'Country', name: 'country' },
      { placeholder: 'City', name: 'city' }
    ]
  }
];

const validate = ({ title, contact, country, city, description }: IBaseValidation) => {
  const errors = {
    title: '',
    contact: '',
    country: '',
    city: '',
    description: ''
  };

  if (description.length > 265) {
    errors.description = 'Length must be 265 characters or less';
  } else {
    delete errors.description;
  }

  if (!title) {
    errors.title = 'Required field';
  } else if (title.length < 5) {
    errors.title = 'Length must be at least 5 characters';
  } else if (title.length > 24) {
    errors.title = 'Length must be 24 characters or less';
  } else {
    delete errors.title;
  }

  if (!contact) {
    errors.contact = 'Required field';
  } else if (contact.length < 5) {
    errors.contact = 'Length must be at least 5 characters';
  } else if (contact.length > 24) {
    errors.contact = 'Length must be 24 characters or less';
  } else {
    delete errors.contact;
  }

  if (!country) {
    errors.country = 'Required field';
  } else if (country.length > 24) {
    errors.country = 'Length must be 24 characters or less';
  } else {
    delete errors.country;
  }

  if (!city) {
    errors.city = 'Required field';
  } else if (city.length > 24) {
    errors.city = 'Length must be 24 characters or less';
  } else {
    delete errors.city;
  }

  return errors;
};

const CreateEvent: React.FC = () => {
  const user = useContext(UserContext);
  const history = useHistory();
  const formik = useFormik<IBaseValidation>({
    initialValues: {
      title: '',
      contact: '',
      description: '',
      country: '',
      city: ''
    },
    validate: (values) => validate(values),
    onSubmit: ({ title, contact, description, country, city }, { setSubmitting }) => {
      fetch(SERVER_URL + '/api/events/create', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          contact,
          country,
          city,
          description,
          creatorID: user.id,
          creatorName: user.username
        })
      })
        .then((r) => r.json())
        .then((data) => {
          setSubmitting(false);
          history.push(`/events/${data}`);
        });
    }
  });
  return <Form formik={formik} headTitle="Create your own event!" submitButtonText="Create" sections={sections} />;
};

export default CreateEvent;
