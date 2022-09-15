export const unitOptions = [
  {
    label: 'Nos.',
    value: 'Nos.',
  },
  {
    label: 'Pcs.',
    value: 'Pcs.',
  },
  {
    label: 'EACH',
    value: 'EACH',
  },
  {
    label: 'Pkts.',
    value: 'Pkts.',
  },
  {
    label: 'Mtrs.',
    value: 'Mtrs.',
  },
  {
    label: 'Rolls',
    value: 'Rolls',
  },
  {
    label: 'Rolls',
    value: 'Rolls',
  },
  {
    label: 'Kg',
    value: 'Kg',
  },
  {
    label: 'Set',
    value: 'Set',
  },
  {
    label: 'Bottle',
    value: 'Bottle',
  },
  {
    label: 'Box',
    value: 'Box',
  },
  {
    label: 'Litres',
    value: 'Litres',
  },
  {
    label: 'Feet',
    value: 'Feet',
  },
  {
    label: 'Sheet',
    value: 'Sheet',
  },
  {
    label: 'Bundle',
    value: 'Bundle',
  },
  {
    label: 'Pair',
    value: 'Pair',
  },
  {
    label: 'Can',
    value: 'Can',
  },
  {
    label: 'Pack',
    value: 'Pack',
  },
]

export const getUnitOptions = async (val) => {
  const searchTerm = val.toLowerCase().trim()
  const result = await unitOptions.filter((option) =>
    option.value.toLowerCase().includes(searchTerm)
  )
  return result
}
