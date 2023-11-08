import React from 'react';
import { Box, Stack, Button } from '@mui/material'

const Login = () => {
  return (
    <Stack spacing='250px' justifyContent="center" alignItems="center" backgroundColor='black' height='100vh'>
        <Box>
            <img src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" alt="Spotify logo" style={{ width: '100%', height: '200px' }} />
        </Box>
        <Button variant="contained" color="success" href="/" style={{ color: 'white', borderRadius: '99px', padding: '20px' }}>LOGIN WITH SPOTIFY</Button>
    </Stack>
  )
}

export default Login