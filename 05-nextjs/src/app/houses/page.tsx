'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const HouseListPage = () => {
  const router = useRouter();
  const onNavigateBack = () => {
    router.push('/'); // or router.back()
  };

  return (
    <>
      <h2>House list page</h2>
      <ul>
        <li>Audi Q8</li>
        <li>BMW X7</li>
      </ul>
      <button onClick={onNavigateBack}>Navigate to home</button>
    </>
  );
};

export default HouseListPage;
