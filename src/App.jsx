import './App.css'
import { useMemo, useState } from 'react';
import { Cell } from './Cell';
import { createEmptyArray, fillUpTables } from './generateEmptyTables'
import { Button, Flex, Grid, Stack } from '@chakra-ui/react'
import { Card } from './Card';

const SIZE = 36;
const TABLES_NUMBER = 18;

function App() {
  const tables = useMemo(() => createEmptyArray(SIZE, TABLES_NUMBER), []);
  const [, setState] = useState({});

  console.log('tables: ', tables);
  console.log('render');

  return (
    <Stack>
      <Button color='black' onClick={() => {
        fillUpTables(tables);
        setState({});
      }}>Fill up</Button>
      {
        tables.map((table, index) => {
          return (
            <Flex key={`table-${index}`} gap='1'>
              {
                table.map((letter, index) => <Cell
                  key={`letter-${index}`}
                  letter={table[index]}
                  onChange={(letter) => {
                    table[index] = letter;
                  }}
                />)
              }
            </Flex>
          );
        })
      }

      <Grid mt='30px' gridTemplateColumns='repeat(5, 1fr)' gap='16px'>
        {tables.map((table, index) => {
          return (
            <Card key={`card-${index}`} table={table} />
          )
        })}
      </Grid>
    </Stack>
  )
}

export default App
