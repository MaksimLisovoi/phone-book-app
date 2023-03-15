import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Modal } from '@mui/material';
import { Fade } from '@mui/material';
import { Backdrop } from '@mui/material';
import { ContactsForm } from './ContactsForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const ContactFormModal = ({ isModalOpen, handleCloseModal }) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isModalOpen}>
        <Box sx={style}>
          <ContactsForm handleCloseModal={handleCloseModal} />
        </Box>
      </Fade>
    </Modal>
  );
};
