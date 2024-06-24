import { Box, Container, Divider, Link, Typography } from '@mui/material';

export const MainPage = () => {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        marginTop: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'flex',
      }}
    >
      <Box sx={{ background: '#F5F5F5', width: '75%', padding: '10px' }}>
        <Typography
          variant="h1"
          sx={{ fontSize: '48px', fontWeight: '500', maxWidth: 'fitContent' }}
        >
          MAKSIM KHOTSIN (Frontend Developer)
        </Typography>
        <Divider orientation="horizontal" />

        <Typography sx={{ marginTop: '10px', marginBottom: '10px' }}>
          Digital CV with greater details than in PDF.
        </Typography>
        <Divider orientation="horizontal" />

        <Link
          variant="h4"
          underline="hover"
          sx={{ cursor: 'pointer', color: '#0027A5' }}
        >
          Summary
        </Link>
        <Divider
          orientation="horizontal"
          sx={{ border: '1px solid rgba(0, 0, 0, 0.5)' }}
        />
      </Box>

      <Box sx={{ background: '#13376E', width: '25%' }}>123</Box>
    </Container>
  );
};
