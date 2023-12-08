'use client'

import { Formik } from 'formik';
import { ArrowRight } from 'lucide-react';

export default function Page() {
    return (
        <div className="flex text-black font-opensans w-full h-screen flex-col md:flex-row-reverse bg-red-300">
            <div className="flex h-screen w-screen md:w-2/3 bg-gray-300">
                {/* GPS // top // right */}
            </div>
            <div className="flex absolute top-4 left-4 h-[3rem] rounded-md w-[3.5rem] bg-white">s</div>
            <div className="flex absolute top-4 right-4 h-[3rem] rounded-md w-[9rem] bg-white"></div>
            <div className="flex flex-col rounded-t-2xl absolute bottom-0 bg-white w-screen h-1/2">
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
                        <form className="flex flex-col mx-[2em] my-auto" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="flex bg-red-300 rounded-md h-[4rem] w-full"
                                value={values.startLocation}
                            />
                            {/* {errors.email && touched.email && errors.email} */}
                            <input
                                type="password"
                                name="password"
                                className="flex bg-red-300 rounded-md h-[4rem] mt-[0.8rem] w-full"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.endLocation}
                            />
                            <input
                                type="password"
                                name="password"
                                className="flex bg-red-300 rounded-md h-[4rem] mt-[0.8rem] w-full"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.endLocation}
                            />
                            <div className="flex mt-[0.8rem]"> 
                                <input
                                    type="password"
                                    name="password"
                                    className="flex bg-red-300 rounded-md h-[4rem] w-full"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.endLocation}
                                />
                                {/* {errors.password && touched.password && errors.password} */}
                                <button className='bg-pink-300 ml-[.5rem] text-white flex w-[5.5rem] h-[4rem] rounded-md' type="submit" disabled={isSubmitting}>
                                    <ArrowRight className="flex m-auto" height={"3rem"} />
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}