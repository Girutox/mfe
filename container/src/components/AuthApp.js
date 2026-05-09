import { mount } from 'auth/AuthIndex';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname: pathName } = history.location;

        if (pathName !== nextPathName) {
          history.push(nextPathName);
        }
      },
      initialPath: history.location.pathname,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
