import { Form, Formik } from "formik";
import React from "react";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import TobetoTextInput from "../utilities/customFormControls/TobetoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };// Formik için başlangıç değerleri

  const schema = Yup.object({// Formik için doğrulama şeması
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <TobetoTextInput name="productName" placeholder="Ürün adı" />
          <TobetoTextInput name="unitPrice" placeholder="Ürün fiyatı" />
          <Button color="green" type="submit"> Ekle </Button>
        </Form>
      </Formik>
    </div>
  );
}
