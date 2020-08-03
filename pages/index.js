import React from 'react';
import Layout from '../components/layout/Layout';

import styled from '@emotion/styled';

const Heading = styled.h1`
  color: red;
`

export default function Home() {
  return (
    <Layout>
      <div>
        <Heading>Inicio</Heading>
      </div>
    </Layout>
  );
}
