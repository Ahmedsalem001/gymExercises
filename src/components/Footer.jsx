import {Box , Typography, Stack} from '@mui/material'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor={'#fff3f4'}>
      <Stack gap={'40px'} alignItems={'center'} px="40px" pi="24px">
        <Typography variant='h5' pb='40px' mt='40px'> 
          Made with ❤ by DEMO
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer