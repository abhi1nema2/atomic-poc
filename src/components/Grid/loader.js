import React from 'react';
import { render } from 'react-dom';

const loader = (element, props) => {
  return new Promise((resolve, reject) => {
      require.ensure([], (require) => {
          const Component = require('./index').default;
          try {
              if (typeof element !== 'undefined' && typeof props !== 'undefined') {
                  try {
                    render(<Component {...props} />, element, resolve);
                  } catch (e) {
                    reject(e);
                  }
                } else {
                  resolve(Component);
              }
          } catch(error) {
              reject(error);
          }
      }, 'Grid');
  });
}

export default loader;