import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { heroSearch } from '../../../actions/search';
import { useDispatch } from 'react-redux';

export const SearchImput = () => {

    const dispatch = useDispatch()

    return (
        <>
             <div>
    
                <Formik
                        initialValues={{ search: '' }}
                        validate={values => {
                          const errors = {};
                          if (!values.search) {
                            errors.search = 'Required';
                          } 
                          return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                        
                        dispatch(heroSearch(values))
                        
                        setSubmitting(false);
                        }}
                      >
                        {({ isSubmitting }) => (
                          <Form >
                             <div className="searchImput">
                             <Field type="search" name="search" className="searchImput__search" />


                            <button type="submit" disabled={isSubmitting} className="searchImput__button">
                            <i className="fab fa-searchengin"></i>
                            </button>
                             </div>

                            <ErrorMessage name="search" component="div" className="formAlert"/>
                          </Form>

                        )}
                      </Formik>
                    </div>
                </>
              )
            };


 

 
 

 