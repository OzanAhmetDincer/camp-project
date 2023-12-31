import React from 'react'
import { useField } from 'formik'
import { FormField,Label } from 'semantic-ui-react'


// "TobetoTextInput" componentini başka bir yerde çağırırken birden fazla property gelebileceği için parametreyi "...props" şekilde tanımladık
export default function TobetoTextInput({...props}) {
    //console.log(props)
    //reflect api
    const [field,meta] = useField(props)// "useField", formikte input elemanı ile bilgi alabilmemizi sağlar. Yani form da inputlrdan gelen verileri alır 
    //console.log(field)// "field" bize verilerimizi verir
    //console.log(meta)// "meta" bize hatları verir. Bunun içerisinde touched,error gibi bilgiler var


    // Aşağıda ki "!!" metin ifadelerde eğer metin varsa "true" yoksa "false" döndürür
    return (
        <FormField error={meta.touched && !!meta.error}>
           <input {...field} {...props} />
           {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
           ):null}
        </FormField>
    )
}