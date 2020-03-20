import React from 'react';
import Home from './views/Home';

import {
  Environment,
  Route,
  SinglePageApp
} from "infrastructure-components";


export default (
  <SinglePageApp
      stackName = "random-app"
      buildPath = 'build'
      region='us-east-1'>

        <Environment
            name="dev"
        />
      {/* <Environment
          name="dev"
          domain="my.domain.com"
          certArn="arn:aws:acm:us-east-1:************:certificate/********-****-****-****-************"
      /> */}

      <Route
          path='/'
          name='Infrastructure-Components'
          component={Home}
      />


  </SinglePageApp>);
