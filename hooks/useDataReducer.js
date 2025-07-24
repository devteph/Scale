/* eslint-disable react/button-has-type */
import React, { useEffect, useReducer, useState } from 'react';
import { useRouter } from 'next/router';

export const useDataReducer = (reducer, initialState = {}) => {
  const router = useRouter();
  const [changed, setChanged] = useState(false);
  const [{ nextRoute, confirmed }, setNextRoute] = useState({ nextRoute: null, confirmed: false });
  const [state, dispatch] = useReducer(reducer, initialState);

  const toNextRoute = () => setNextRoute({ nextRoute, confirmed: true });
  const stayHere = () => setNextRoute({ nextRoute: null, confirmed: false });

  useEffect(() => {
    const onRouteChangeStart = (route) => {
      if (!(changed)) return undefined;
      setNextRoute({ nextRoute: route, confirmed: false });
      router.events.emit('routeChangeError');
      // eslint-disable-next-line no-throw-literal
      throw 'routeChange aborted.';
    };

    const cleanUpFunction = () => router.events.off('routeChangeStart', onRouteChangeStart);

    if (nextRoute && confirmed) {
      router.push(nextRoute, null, { shallow: true });
      return cleanUpFunction;
    }

    router.events.on('routeChangeStart', onRouteChangeStart);

    return cleanUpFunction;
  }, [nextRoute, confirmed, state]);

  const Prompt = () => {
    if (!(nextRoute)) return null;
    return (
      <>
        <p>Are you sure you want to leave?</p>
        <button onClick={toNextRoute}>yes</button>
        <button onClick={stayHere}>no</button>
      </>
    );
  };

  const dispatchWrap = (action) => {
    if (!changed) setChanged(true);
    dispatch(action);
  };

  const clear = () => setChanged(false);

  return [state, dispatchWrap, Prompt, clear];
};
