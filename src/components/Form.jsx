import { Formik } from 'formik';
import React,{useState} from 'react'
import "./form.css"
function Form() { 
    
    const [data, setData] = useState({
        name: "rohit",
        email: "rroo@gmail.com",
        password: "1234567890",
        phoneNo: "9876543210",
    });
    return (
        <div className='form'>
            
            <Formik 
                initialValues={{ email: "", password: "" ,name : "",phone:""}}
                validate={(values) => {
                    const errors = {};
                    if(!values.password){
                        errors.password="Required"
                    }
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = "Invalid email address";
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {

                   
                    if (
                        values.email === data.email &&
                        values.password === data.password 
                    
                    ) {
                        alert("YOU ARE VALID USER");
                        setSubmitting(false);
                    } else {
                        alert("YOU ARE NOT A VALID USER");
                        setSubmitting(false);
                    }
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
                    <form className='form-card' onSubmit={handleSubmit}>
                    <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name} 
                            placeholder="YOUR NAME"
                        />

                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                            placeholder="EMAIL"
                        />
     
        {errors.email && touched.email && errors.email}
    

                        <input
                            type="password"
                            name="password" 
                            placeholder='PASSWORD'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password} 
                            required
                        />
                           {errors.password}
                          
                                                                      <input
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone} 
                            placeholder="PHONE"
                        />
                            

<div className='btn-list'>
<button  className='reset' type="submit" disabled={isSubmitting}>
                            Reset
                        </button>
                        <button className='submit' type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
</div>
 
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Form