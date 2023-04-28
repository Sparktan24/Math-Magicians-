import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: {
              'X-Api-Key': 'HVPumsQZZbuvrRJQUVOp9A==7AwoTsPf5S2IW9Uf',
            },
          },
        );
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong</div>;
  if (isLoading) return <div>Loading</div>; //  API NOT WORKING PROPERLY RIGHT NOW
  return (
    <div>
      {data && data.map((item) => <p key={item.author}>{item.quote}</p>)}
    </div>
  );
};

export default Quote;
