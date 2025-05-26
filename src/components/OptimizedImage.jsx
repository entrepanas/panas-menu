// src/components/OptimizedImage.jsx
import React, { useState, useCallback } from 'react';
import '../App.css';

const OptimizedImage = React.memo(({ src, alt, className, width, height, loading = "lazy" }) => {
  const [imageError, setImageError] = useState(false);

  const handleError = useCallback(() => {
    setImageError(true);
  }, []);

  if (imageError) {
    return (
      <div className={`${className} placeholder-image`}>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
      width={width}
      height={height}
    />
  );
});

export default OptimizedImage;
