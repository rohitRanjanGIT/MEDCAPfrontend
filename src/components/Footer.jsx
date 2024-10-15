import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Phone, Mail, LocationOn, Instagram, Facebook, YouTube, Twitter, LinkedIn } from '@mui/icons-material';
import Logo from '../assets/medcap_logo.png';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#673ab7', color: 'white', padding: '40px 0' }}>
      <Container>
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" alignItems="center">
              <img 
                src={Logo} 
                alt="MedCap Logo" 
                style={{ width: 50, height: 50, borderRadius: '50%', marginRight: 16 }} // Smaller and circular logo
              />
              <Typography variant="h6" component="span">MedCap</Typography>
            </Box>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              Your partner in healthcare solutions.
            </Typography>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Services</Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Psychotherapy</li>
              <li>Mental Counseling</li>
              <li>Support Groups</li>
              <li>Case Management</li>
            </ul>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Contact</Typography>
            <Typography variant="body2" display="flex" alignItems="center">
              <Phone sx={{ marginRight: 1 }} /> +14 5464 8272
            </Typography>
            <Typography variant="body2" display="flex" alignItems="center">
              <Mail sx={{ marginRight: 1 }} /> rona@domain.com
            </Typography>
            <Typography variant="body2" display="flex" alignItems="center">
              <LocationOn sx={{ marginRight: 1 }} /> Lazyy Tower 192, Bum Swiss
            </Typography>
          </Grid>

          {/* Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Links</Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Privacy Policy</li>
              <li>Term Of Use</li>
            </ul>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ borderTop: '1px solid white', marginY: 4 }} />

        {/* Social Media and Copyright */}
        <Box textAlign="center">
          <div>
            <IconButton sx={{ color: 'white', margin: '0 5px' }}><Instagram fontSize="small" /></IconButton>
            <IconButton sx={{ color: 'white', margin: '0 5px' }}><Facebook fontSize="small" /></IconButton>
            <IconButton sx={{ color: 'white', margin: '0 5px' }}><YouTube fontSize="small" /></IconButton>
            <IconButton sx={{ color: 'white', margin: '0 5px' }}><Twitter fontSize="small" /></IconButton>
            <IconButton sx={{ color: 'white', margin: '0 5px' }}><LinkedIn fontSize="small" /></IconButton>
          </div>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            © 2023 MedCap. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
