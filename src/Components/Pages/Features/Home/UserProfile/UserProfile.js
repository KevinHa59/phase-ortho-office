import React, { useEffect } from 'react';

export default function UserProfile() {
  useEffect(() => {
    document.title = 'User Profile';
  }, []);
  return <div>UserProfile</div>;
}
