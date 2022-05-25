import React, {useCallback} from 'react'

interface FilterProps {
  name: string
  onSelect(item?: string): void
  data: (string | number)[]
  value?: string
}

export const Filter = ({name, onSelect, data, value}: FilterProps) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSelect(e.target.value)
    },
    [onSelect],
  )

  return (
    <div className="filter">
      <select
        value={value}
        onChange={onChange}
        className="filter__select"
        name={name}
      >
        <option selected={value === undefined} hidden disabled>
          {name}
        </option>
        {data.map(item => (
          <option key={item} className="filter__option" value={item}>
            {item}
          </option>
        ))}
      </select>
      {value ? (
        <div
          onClick={() => onSelect(undefined)}
          className="filter__placeholder"
        >
          {value}
        </div>
      ) : null}{' '}
    </div>
  )
}
