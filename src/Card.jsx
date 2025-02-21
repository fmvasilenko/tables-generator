import { Badge, Grid, GridItem } from "@chakra-ui/react";

export const Card = ({ table }) => {
  return (
    <Grid gridTemplateColumns='repeat(6, 1fr)' gap='4px' width='fit-content'>
      {
        table.map((letter, index) => {
          return (
            <GridItem key={`letter-${index}`} height='20px'>
              <Badge width='20px' height='20px' overflow='hidden'>{letter}</Badge>
            </GridItem>
          );
        })
      }
    </Grid>
  );
}
