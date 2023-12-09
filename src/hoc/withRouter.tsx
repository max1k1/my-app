import React from 'react';
import { useParams } from 'react-router-dom';

export function withRouter<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  return (props: WCP) => {
    const match = { params: useParams() };
    return <WrappedComponent {...props} match={match} />;
  };
}
