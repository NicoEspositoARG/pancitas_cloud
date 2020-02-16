import React, {useState }  from 'react';

import './Header.css'

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const Header = () => {
    const [isBudget, setIsBudget] = useState(false)
    const [hasDelivery, setHasDelivery] = useState(false)
    const [dueDate, setDueDate] = useState(Date.now())
    const [dueTime, setDueTime] = useState(Date.now())


    const toggleChecked = () => {
      setIsBudget(prev => !prev);
    };

    const toggleDelivery = () => {
      setHasDelivery(prev => !prev);
    };
    
    return (
      <section className="Order__header">
        <TextField
          className="headerInputs"
          name="client_name"
          color="secondary"
          label="Nombre"
        />
        <TextField
          className="headerInputs"
          name="client_address"
          color="secondary"
          label="Domicilio"
        />
        <TextField
          className="headerInputs"
          name="client_phone"
          color="secondary"
          label="Teléfono"
        />
        {/* <TextField
          className="headerInputs"
          name="order_delivery_date"
          color="secondary"
          label="Entrega"
        /> */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

        
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Fecha de entrega"
            value={dueDate}
            onChange={setDueDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Hora de Entrega"
          value={dueTime}
          onChange={setDueTime}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </MuiPickersUtilsProvider>


        <TextField
          className="headerInputs"
          name="order_observation"
          color="secondary"
          label="Observación"
        />
{/* Switches */}
        <FormGroup row={false}>
          <FormControlLabel
            control={
              <Switch
                checked={isBudget}
                onChange={toggleChecked}
                value="isBudget"
              />
            }
            label="Presupuesto"
            color="secondary"
          />
          <FormControlLabel
            control={
              <Switch
                checked={hasDelivery}
                onChange={toggleDelivery}
                value="hasDelivery"
              />
            }
            label="Envio"
            color="secondary"
          />
        </FormGroup>

        {/* {hasDelivery && */}
        <div><TextField
          className="headerInputs"
          name="delivery_from"
          color="secondary"
          label="De parte de"
          disabled={!hasDelivery}
        />
        <TextField
          className="headerInputs"
          name="delivery_to"
          color="secondary"
          label="Para"
          disabled={!hasDelivery}

        /></div> 
      </section>
    );

}

export default Header;