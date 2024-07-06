import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const DeliveryDetails: React.FC = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        city: "",
        country: "",
        phoneNumber: "",
        email: "",
        saveDetails: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is Required"),
        address: Yup.string().required("Address is Required"),
        city: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        phoneNumber: Yup.string().required("Phone number is Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email address is Required"),
      })}
      onSubmit={(values: any) => {
        console.log(values);
      }}
    >
      <Form className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full name
          </label>
          <Field
            name="name"
            type="text"
            className="mt-1 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Street Address
          </label>
          <Field
            name="address"
            type="text"
            className="mt-1 block w-full h-10  shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="address"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            Town/City
          </label>
          <Field
            name="city"
            type="text"
            className="mt-1 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="city"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <Field
            name="country"
            type="text"
            className="mt-1 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="country"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone number
          </label>
          <Field
            name="phoneNumber"
            type="text"
            className="mt-1 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="phoneNumber"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <Field
            name="email"
            type="email"
            className="mt-1 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-4 flex items-center">
          <Field type="checkbox" name="saveDetails" className="mr-2" />
          <label htmlFor="saveDetails" className="text-sm">
          Save this information for future checkouts
          </label>
        </div>
        <button
          type="submit"
          className="bg-primarycolor text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default DeliveryDetails;
