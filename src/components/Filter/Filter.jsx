import { Box } from 'components/Box';
import TextField from '@mui/material/TextField';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = ({ checkContacts }) => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const changeFilter = e => {
    const { value } = e.target;

    dispatch(setFilter(value));
  };

  return (
    <Box mb="4" width="50%">
      <TextField
        disabled={!checkContacts}
        fullWidth
        label="Filter by name"
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </Box>
  );
};

Filter.propTypes = {};
