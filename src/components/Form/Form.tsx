import React, { Fragment } from 'react';
import TextInput from '../TextInput/TextInput';
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import { FormikValues } from 'formik';
import { Section } from '../../types/types';
import './Form.scss';

interface IForm {
  headTitle: string;
  subTitle?: string | JSX.Element;
  sections: Section[];
  submitButtonText: string;
  formik: FormikValues;
}

const Form: React.FC<IForm> = ({ headTitle, formik, sections, submitButtonText, subTitle }) => {
  return (
    <div className="form-container">
      <div className="form-box">
        <h1>{headTitle}</h1>
        {subTitle ? <p>{subTitle}</p> : null}
        <form onSubmit={formik.handleSubmit} className="form">
          {formik.values.error ? <div className="form-error">{formik.values.error}</div> : null}
          {sections.map((section, index) => {
            return (
              <Fragment key={index}>
                {section.title ? <h2>{section.title}</h2> : null}
                <div className="input-section">
                  {section.fields.map((field) => {
                    return (
                      <TextInput
                        key={field.name}
                        initialVal={formik.values[field.name]}
                        placeholder={field.placeholder}
                        handleChange={formik.handleChange}
                        name={field.name}
                        error={formik.errors[field.name] || null}
                        twoColumns={field.twoColumns}
                        multiline={field.multiline}
                      />
                    );
                  })}
                </div>
              </Fragment>
            );
          })}
          <button className="submit-button" type="submit" disabled={formik.isSubmitting}>
            <span>{submitButtonText}</span>
            {formik.isSubmitting || formik.isValidating ? (
              <CachedRoundedIcon style={{ animation: 'spin 1s linear infinite' }} />
            ) : (
              <ArrowRightAltRoundedIcon />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
