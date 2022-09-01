import Select from 'react-select'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

const haha = [
  { value: 'abc', label: 'abc' },
  { value: 'abcd', label: 'abcd' },
  { value: 'abcde', label: 'abcde' },
]

export default function Form() {
  const [selected, setSelected] = useState({
    value: '',
    label: 'Select...',
  })

  const formik = useFormik({
    initialValues: {
      unit: '',
    },
    validationSchema: Yup.object({
      unit: Yup.string().required('Required'),
    }),
  })

  return (
    <>
      <Select
        options={haha}
        isClearable={true}
        onChange={(val) => {
          // So, this is important to set it to an empty string here.
          formik.setFieldValue('unit', val ? val.value : '')
          setSelected(val)
        }}
        onBlur={() => formik.setFieldTouched('unit', true)}
        value={selected}
      />
      <p>{formik.errors.unit}</p>
      {formik.values.unit}
    </>
  )
}
