import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker() {
  const [Day, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const convDate = (Day) => new Date(Day).toLocaleDateString("pt-BR");

  const Value = () => {
    const cloneState = {
      Day: this.convDate(this.state.Day),
      endDate: this.convDate(this.state.endDate),
    };
    return cloneState;
  };

  return (
    <div>
      <DatePicker
        selected={Day}
        selectsStart
        startDate={Day}
        endDate={endDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker
        selected={endDate}
        selectsEnd
        startDate={Day}
        endDate={endDate}
        minDate={Day}
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
}
