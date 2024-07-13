import React, { useState } from "react";
import Image from "next/image";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const PaymentMethod: React.FC = () => {
  const [showForm, setShowForm] = useState(false); 

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowForm(event.target.value === "card"); 
  };
  return (
    <section className="lg:mb-[88px] mb-10">
      <h2 className="text-base lg:text-xl font-semibold mb-8">
        Payment Method
      </h2>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className=" flex items-center py-2">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              className="mr-4 p-2 custom-radio"
              onChange={handlePaymentMethodChange}
            />
            <label
              htmlFor="card"
              className="mr-4 text-sm lg:text-base font-normal"
            >
              Credit Card
            </label>
          </div>
          <div className=" flex items-center py-2">
            <input
              type="radio"
              id="pod"
              name="paymentMethod"
              value="pod"
              className="mr-4 p-2 custom-radio"
              onChange={handlePaymentMethodChange}
            />
            <label
              htmlFor="pod"
              className="mr-4 text-sm lg:text-base font-normal"
            >
              Pay on Delivery
            </label>
          </div>
        </div>
        <div className="flex self-start p-0 lg:space-x-6">
          <Image
            src="/icons/logos_mastercard.svg"
            alt="Mastercard"
            width={50}
            height={30}
          />
          <Image
            src="/icons/logos_visa.svg"
            alt="Visa"
            width={50}
            height={30}
          />
        </div>
      </div>

      {showForm && ( 
      <Formik
      initialValues={{
        cardname: "",
        cardnumber: "",
        date: "",
        cvv: "",
      }}
      validationSchema={Yup.object({
        cardname: Yup.string().required("Card name is Required"),
        cardnumber: Yup.string().required("Card Number is Required"),
        date: Yup.string().required("Required"),
        cvv: Yup.string().required("Required"),
      })}
      onSubmit={(values: any) => {
        console.log(values);
      }}
    >
      <Form className="mb-[48px] mt-5 lg:mb-[78px] lg:mt-[56px] ">
        <div className="mb-8">
          <label
            htmlFor="cardname"
            className="block text-base font-normal text-gray-500 "
          >
            Card holder’s name
          </label>
          <Field
            name="cardname"
            type="text"
            className="mt-2 p-2 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="cardname"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="cardnumber"
            className="block text-base font-normal text-gray-500"
          >
            Card number
          </label>
          <Field
            name="cardnumber"
            type="text"
            className="mt-2 block w-full h-10  shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="cardnumber"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="date"
            className="block text-base font-normal text-gray-500"
          >
            Expiration date
          </label>
          <Field
            name="date"
            type="text"
            className="mt-2 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="date"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="cvv"
            className="block text-base font-normal text-gray-500"
          >
            CVC number
          </label>
          <Field
            name="cvv"
            type="password"
            className="mt-2 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-lg bg-gray-100"
          />
          <ErrorMessage
            name="cvv"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
      </Form>
    </Formik>
     )}
    </section>
  );
};

export default PaymentMethod;
