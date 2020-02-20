import React, { Fragment } from 'react';
import TextInput from '../TextInput/TextInput';
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import { FormikValues } from 'formik';
import { Section } from '../../types/types';
import { Select, MenuItem } from '@material-ui/core';
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
          {formik.values.error ? <div className="form-error">Username is taken</div> : null}
          {sections.map((section, index) => {
            return (
              <Fragment key={index}>
                {section.title ? <h2>{section.title}</h2> : null}
                <div className="input-section">
                  {section.fields.map((field) => {
                    return field.dropdown ? null : (
                      <TextInput
                        key={field.name}
                        placeholder={field.placeholder}
                        handleChange={formik.handleChange}
                        name={field.name}
                        error={formik.errors[field.name] || null}
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
