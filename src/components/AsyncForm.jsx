import AsyncSelect from 'react-select/async'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { getUnitOptions } from '../api/getData'

export default function Form() {
  const formik = useFormik({
    initialValues: {
      unit: '',
    },
    validationSchema: Yup.object({
      unit: Yup.string().required('Required'),
    }),
  })

  const loadOptions = (val) => getUnitOptions(val)

  return (
    <>
      <AsyncSelect
        loadOptions={loadOptions}
        defaultOptions={true}
        cacheOptions
        isClearable={true}
        onChange={(val) => {
          formik.setFieldValue('unit', val ? val.value : '')
        }}
        onBlur={() => formik.setFieldTouched('unit', true)}
      />
      <p>{formik.errors.unit}</p>
      {formik.values.unit}
    </>
  )
}
