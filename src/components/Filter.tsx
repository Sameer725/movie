import React, {useCallback} from 'react'

interface FilterProps {
  data: (string | number)[]
  name: string
  onSelect(item?: string): void
  value?: string
}

export const Filter = ({data, name, onSelect, value}: FilterProps) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSelect(e.target.value)
    },
    [onSelect],
  )

  return (
    <div className="filter">
      <select
        className="filter__select"
        name={name}
        onChange={onChange}
        value={value}
      >
        <option disabled hidden selected={value === undefined}>
          {name}
        </option>
        {data.map(item => (
          <option className="filter__option" key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {value ? (
        <div
          className="filter__placeholder"
          onClick={() => onSelect(undefined)}
        >
          {value}
        </div>
      ) : null}{' '}
    </div>
  )
}
