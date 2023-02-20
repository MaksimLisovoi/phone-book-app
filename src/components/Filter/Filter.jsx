import { Input } from 'components/Form/Form.styled';
import { Box } from 'components/Box';
import { Label, LabelText } from './Filter.styled';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);

  console.log(filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    const { value } = e.target;

    dispatch(setFilter(value));
  };

  return (
    <Box mb="4">
      <Label>
        <LabelText>Filter by name:</LabelText>
        <Input type="text" value={filter} onChange={changeFilter} />
      </Label>
    </Box>
  );
};

Filter.propTypes = {};
