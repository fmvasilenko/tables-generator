import { Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const Cell = ({ letter, onChange }) => {
  const [value, setValue] = useState(letter);

  /*
  useEffect(() => {
    onChange(value);
  }, [value]);
  */

  useEffect(() => {
    setValue(letter);
  }, [letter]);

  return (
    <Input
      size='2xs'
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        onChange(event.target.value);
      }}
    />
  );
}
