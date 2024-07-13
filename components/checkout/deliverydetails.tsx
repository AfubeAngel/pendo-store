import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { saveCustomerDetails } from "@/store/customerDetails/customerDetailsSlice";
import { useRouter } from "next/router";


const DeliveryDetails: React.FC = () => {
  const dispatch = useDispatch();

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
        dispatch(saveCustomerDetails(values));
        // setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
      <Form className="mb-0 lg:mb-[77px]">
        <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
        <div className="mb-8">
          <label
            htmlFor="name"
            className="block text-base font-normal text-gray-500 "
          >
            Full name
          </label>
          <Field
            name="name"
            type="text"
            className="mt-2 p-2 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="address"
            className="block text-base font-normal text-gray-500"
          >
            Street Address
          </label>
          <Field
            name="address"
            type="text"
            className="mt-2 block w-full h-10  shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="address"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="city"
            className="block text-base font-normal text-gray-500"
          >
            Town/City
          </label>
          <Field
            name="city"
            type="text"
            className="mt-2 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="city"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="country"
            className="block text-base font-normal text-gray-500"
          >
            Country
          </label>
          <Field
            name="country"
            type="text"
            className="mt-2 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="country"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="phoneNumber"
            className="block text-base font-normal text-gray-500"
          >
            Phone number
          </label>
          <Field
            name="phoneNumber"
            type="text"
            className="mt-2 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="phoneNumber"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block text-base font-normal text-gray-500"
          >
            Email address
          </label>
          <Field
            name="email"
            type="email"
            className="mt-2 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className=" flex items-center">
          <Field type="checkbox" name="saveDetails" checked className="mr-2 custom-checkbox " />
          <label htmlFor="saveDetails" className="text-sm">
          Save this information for future checkouts
          </label>
        </div>
        <button
            type="submit"
            className="bg-white border border-black flex py-[14px] lg:py-2 px-4 gap-4 justify-center items-center w-[150px] h-14 font-base tracking-wider text-black rounded-lg hover:text-black hover:bg-white mt-8"
            disabled={isSubmitting}
          >
            Submit
          </button>
      </Form>
      )}
    </Formik>
  );
};

export default DeliveryDetails;
