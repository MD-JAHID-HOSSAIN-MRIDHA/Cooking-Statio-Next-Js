"use client"
import { addDays } from 'date-fns';
import { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styled from 'styled-components';

const CalendarWrapper = styled.div`
  .rdrMonthAndYearPickers select {
    background-color: #f0f0f0;
    border: none;
    padding: 5px;
    font-size: 1rem;
  }
  .rdrDayNumber span {
    font-weight: bold;
    color: #333;
  }
  .rdrDayStartPreview,
  .rdrDayInPreview,
  .rdrDayEndPreview {
    background: #00ff6a;
    border-radius: 50%;
    color: #fff;
  }
`;

const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  const handleSelect = (date) => {
    setDate(date);
  };

  return (

    <Calendar
      date={date}
      onChange={handleSelect}
      showMonthAndYearPickers={true}
      color="#0FC136"
      minDate={addDays(new Date(), -60)}
      maxDate={addDays(new Date(), 60)}
      rangeColors={['#3d91ff', '#3ecf8e', '#fed14c']}
      dragSelectionEnabled={true}
    />

  );
};

export default DatePicker;
