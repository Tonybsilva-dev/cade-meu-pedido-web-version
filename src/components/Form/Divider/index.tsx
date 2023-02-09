import { Grid, Divider as ChakraDivider } from '@chakra-ui/react';
import React from 'react';

const Divider: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns="1fr 1fr"
      columnGap={12}
      opacity={1}
    >
      <ChakraDivider marginY={6} color={'red'} />
      <ChakraDivider marginY={6} color={'red'} />
    </Grid>
  );
}

export default Divider;