import { Box } from 'components/Box';

import { ContactsList } from 'components/ContactsList';
import { Button } from '@mui/material';
import { useState } from 'react';
import { ContactFormModal } from 'components/ContactFormModal';
import { GlobalStyle } from 'components/GlobalStyle';
import Typography from '@mui/material/Typography';
import { BaseContainer } from './Base.styled';

export default function Contacts() {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleOpenModal = () => {
    setisModalOpen(true);
  };

  const handleCloseModal = () => {
    setisModalOpen(false);
  };

  return (
    <BaseContainer component="main">
      {isModalOpen && (
        <>
          <ContactFormModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
        </>
      )}

      <Box p={5}>
        <GlobalStyle />
        <Typography variant="h5" fontSize={28} mb={2}>
          My contacts
        </Typography>

        <Button onClick={handleOpenModal} variant="contained" sx={{ mb: 2 }}>
          Add Contact
        </Button>
        <ContactsList />
      </Box>
    </BaseContainer>
  );
}
