'use client'

import { Formik } from 'formik';
import { ArrowRight } from 'lucide-react';

export default function Page() {
    return (
        <div className="flex text-black font-opensans w-full h-screen flex-col md:flex-row-reverse bg-red-300">
            <div className="flex h-1/2 md:h-screen w-screen md:w-1/2 bg-gray-300">
                {/* GPS // top // right */}
            </div>
            <div className="flex flex-col h-1/2 md:h-screen w-screen md:w-1/2 bg-white">
                {/* bottom // left */}

                <Formik
                    initialValues={{ endLocation: '', startLocation: '', deadline: 0, leaveTime: 0 }}
                    validate={values => {
                        const errors = {};

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <div className="flex mx-auto">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="flex bg-red-300 h-[4rem] w-full"
                                    value={values.startLocation}
                                />
                            </div>
                            {/* {errors.email && touched.email && errors.email} */}
                            <input
                                type="password"
                                name="password"
                                className="flex bg-red-300 h-[4rem] mt-[0.8rem] w-full"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.endLocation}
                            />
                            {/* {errors.password && touched.password && errors.password} */}
                            <button className='bg-pink-300 text-white flex w-[2.8rem] h-[2.8rem] rounded-md' type="submit" disabled={isSubmitting}>
                                <ArrowRight className="flex m-auto" />
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}