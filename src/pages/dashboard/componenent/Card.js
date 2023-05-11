import React, {useState, useEffect, useCallback} from 'react';
import {Grid, Button, Box, useMediaQuery, useTheme} from '@mui/material';


const Card = () => {
  const theme = useTheme ();
  const smallScreen = useMediaQuery (theme.breakpoints.down ('sm'));
  const xSmallScreen = useMediaQuery (theme.breakpoints.down ('xs'));

  const [data, setdata] = useState ({});

  const [value, setValue] = useState ({});

  const [isLoading, setIsLoading] = useState (true);
  const [error, setError] = useState (null);

  const [count, setCount] = useState (0);

  const url = 'https://dummyjson.com/products/';

  const arr = [5];
  async function fetchProduct () {
    await fetch (url)
      .then (data => data.json ())
      .then (data => {
        setValue (data);
        console.log (data);
      })
      .catch (err => setError (err.message));
  }
  // fetchProduct()

  const fetchData = useCallback (async () => {
    setIsLoading (true);
    try {
      const res = await fetch (url, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      if (res.ok) {
        const data = await res.json ();
        setdata (data.products);
        setIsLoading (false);
      }
      // setDataList(dataList.concat(data[6]))
    } catch (err) {
      setError (err.message);
      setIsLoading (false);
    }
  }, []);

  useEffect (
    () => {
      const couter = setInterval (() => {
        setCount ((count + 1) % arr.length);
      }, 3000);

      fetchData ();
      return () => clearInterval (couter);
    },
    [fetchData, count, arr.length]
  );

  console.log ('dataList --> ', data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <p
        style={{
          fontSize: smallScreen ? '20px' : xSmallScreen ? '10px' : '50px',
          fontWeight: smallScreen ? '500' : xSmallScreen ? '400' : '700',
        }}
      >
        Brand Name: {value.brand}
      </p>
      <Grid container>

        {data.map ((value, index) => (
          <Grid key={index} item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Grid
              container
              rowSpacing={'3%'}
              sx={{
                boxShadow: '2px 2px 10px 2px rgba(188, 188, 187, 0.25)',
                padding: '5% !important',
              }}
            >
              <Grid item lg={12} sm={12} xs={12} xl={12}>
                <img
                  src={value.images[count]}
                  alt=""
                  style={{width: '100%', height: '100px'}}
                />
              </Grid>
              <Grid item columnSpacing={'2%'} lg={12}>
                <Grid container>
                  <Grid item lg={8}>
                    <p
                      style={{
                        color: '#453AEF',
                        fontSize: '16px',
                        fontWeight: '500',
                      }}
                    >
                      {value.brand}
                    </p>
                    <p
                      style={{
                        color: '#111111',
                        fontSize: '24px',
                        fontWeight: '700',
                      }}
                    >
                      {value.category}
                    </p>
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      height: '100%',
                    }}
                  >
                    <p>{value.rating}</p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <p
                  style={{
                    color: '#606060',
                    fontSize: '16px',
                    fontWeight: '400',
                    marginBottom: '4%',
                  }}
                >
                  {value.description}
                </p>
                <Grid container columnSpacing={'5%'}>
                  <Grid
                    item
                    lg={4}
                    sx={{
                      display: 'flex',
                      height: '100%',
                      justifyContent: 'space-between',
                    }}
                  >
                    <p>Id: {value.id}</p>
                    <p>Title: {value.title}</p>
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    sx={{
                      display: 'flex',
                      height: '100%',
                      justifyContent: 'space-between',
                    }}
                  >
                    <p>Id: {value.id}</p>
                    <p>Title: {value.title}</p>
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    sx={{
                      display: 'flex',
                      height: '100%',
                      justifyContent: 'space-between',
                    }}
                  >
                    <p>Id: {value.id}</p>
                    <p>Title: {value.title}</p>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#453AEF !important',
                    color: '#ffffff',
                    width: '100%',
                    mt: '4%',
                  }}
                >
                  Start Course
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>

    </div>
  );
};

export default Card;

// function promiseFunction() {
//     const myPromise = new Promise((resolve, reject) => {
//         // Do some asynchronous operation, like fetching data from an API
//         const data = { name: 'John', age: 30 };

//         if (data) {
//           // If the operation is successful, call the resolve function with the resulting data
//           resolve(data);
//         } else {
//           // If the operation fails, call the reject function with an error message
//           reject('Error fetching data from API');
//         }
//       });

//       // Use the promise by chaining the then() and catch() methods
//       myPromise
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
// }

// promiseFunction()