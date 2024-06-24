import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

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
        <Divider orientation="horizontal" sx={{ marginBottom: '15px' }} />

        <Link
          to={'/'}
          style={{
            textDecoration: 'none',
            // color: '#13376E',
          }}
        >
          <Typography variant="h4">Summary</Typography>
        </Link>
        <Divider
          orientation="horizontal"
          sx={{ border: '1px solid rgba(0, 0, 0, 0.5)', marginBottom: '10px' }}
        />

        <Typography paragraph sx={{ textIndent: '20px', marginBottom: '35px' }}>
          Positive and motivated individual, live in Poland, seeking
          opportunities in frontend development. Experience over 1.5 years of
          frontend learning, including internship exposure to real development
          environments, utilizing methodologies such as Scrum, Jira, sprints,
          and demo presentations. Committed to continuous learning and enhancing
          key skills.{' '}
          <Link
            to={'/'}
            style={{
              textDecoration: 'none',
              // color: '#13376E',
            }}
          >
            Read more...
          </Link>
        </Typography>

        <Link
          to={'/'}
          style={{
            textDecoration: 'none',
            // color: '#13376E',
          }}
        >
          <Typography variant="h4">Professional experience</Typography>
        </Link>
        <Divider
          orientation="horizontal"
          sx={{ border: '1px solid rgba(0, 0, 0, 0.5)', marginBottom: '10px' }}
        />

        <Typography variant="h6">
          Frontend React Trainee, 11/2023 - 05/2024
        </Typography>
        <Typography>Andersen Lab, Warsaw, Poland</Typography>

        <List sx={{ listStyleType: 'disc', pl: 2, marginBottom: '20px' }}>
          <ListItem dense sx={{ display: 'list-item' }}>
            Gain practical experience in frontend development within healthcare
            project.
          </ListItem>
          <ListItem dense sx={{ display: 'list-item' }}>
            Collaborate with teams utilizing Scrum methodologies, contributing
            to sprint planning, and delivering quality software.
          </ListItem>
          <ListItem dense sx={{ display: 'list-item' }}>
            Utilize technologies such as HTML, CSS, SCSS, JavaScript,
            TypeScript, React, Redux, Redux Toolkit, RTK Query, Tailwind CSS,
            Jira, GitHub, GitLab, MS Teams, Material-UI, React Dev Tools, Redux
            Dev Tools, and Jest.
          </ListItem>
        </List>

        <Typography variant="h6">
          Consular Section Specialist, 07/2018 - 04/2023
        </Typography>
        <Typography>Embassy of Hungary, Minsk</Typography>

        <List sx={{ listStyleType: 'disc', pl: 2, marginBottom: '35px' }}>
          <ListItem dense sx={{ display: 'list-item' }}>
            Managed personal and confidential information with utmost
            discretion.
          </ListItem>
          <ListItem dense sx={{ display: 'list-item' }}>
            Interacted with diplomats and top managers on regular basis,
            demonstrating professionalism and diplomacy.
          </ListItem>
          <ListItem dense sx={{ display: 'list-item' }}>
            Demonstrated ability to handle various tasks efficiently within
            tight deadlines.
          </ListItem>
          <Link
            to={'/'}
            style={{
              textDecoration: 'none',
              // color: '#13376E',
            }}
          >
            Read more...
          </Link>
        </List>

        <Link
          to={'/'}
          style={{
            textDecoration: 'none',
            // color: '#13376E',
          }}
        >
          <Typography variant="h4">Education</Typography>
        </Link>
        <Divider
          orientation="horizontal"
          sx={{ border: '1px solid rgba(0, 0, 0, 0.5)', marginBottom: '10px' }}
        />

        <Typography sx={{ marginBottom: '15px' }}>
          <strong>Certificate, Computer science, Frontend Development,</strong>{' '}
          09/2021 - 03/2023
          <br />
          RS School - Minsk
        </Typography>

        <Typography sx={{ marginBottom: '35px' }}>
          <strong>MBA, Enterprise management,</strong> 09/2010 - 06/2015
          <br />
          Private University of Management and Business - Minsk
          <br />
          <Link
            to={'/'}
            style={{
              textDecoration: 'none',
              // color: '#13376E',
            }}
          >
            Read more...
          </Link>
        </Typography>

        <Link
          to={'/'}
          style={{
            textDecoration: 'none',
            // color: '#13376E',
          }}
        >
          <Typography variant="h4">Languages</Typography>
        </Link>
        <Divider
          orientation="horizontal"
          sx={{ border: '1px solid rgba(0, 0, 0, 0.5)', marginBottom: '10px' }}
        />

        <Typography sx={{ marginTop: '15px' }}>
          <strong>Belarussian, Russian:</strong> Native
        </Typography>
      </Box>

      <Box sx={{ background: '#13376E', width: '25%' }}>123</Box>
    </Container>
  );
};
