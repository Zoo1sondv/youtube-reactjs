import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Loader = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ? (
        <div className="loader--grid">
          <Box sx={{ width: 248 }}>
            <Skeleton variant="rectangular" width={248} height={154} />
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </Box>
          <Box sx={{ width: 248 }}>
            <Skeleton variant="rectangular" width={248} height={154} />
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </Box>
          <Box sx={{ width: 248 }}>
            <Skeleton variant="rectangular" width={248} height={154} />
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </Box>
          <Box sx={{ width: 248 }}>
            <Skeleton variant="rectangular" width={248} height={154} />
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </Box>
        </div>
      ) : (
        <>
          <Box sx={{ display: 'flex', gap: 5, marginTop: 5, marginLeft: 12 }}>
            <Skeleton variant="rectangular" width={353} height={200} />
            <Box sx={{ width: '60%' }}>
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <Skeleton width="40%" />
              <Skeleton width="60%" />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Loader;
