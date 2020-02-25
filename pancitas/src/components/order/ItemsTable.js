import React, { forwardRef, useState } from "react";

import MaterialTable, {MTableEditField, MTableEditRow} from "material-table";
import TextField from "@material-ui/core/TextField";

import classes from "./ItemsTable.css";

//import Table - Icons:
import AddBox from "@material-ui/icons/AddBox";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
// import RemoveCircle from "@material-ui/icons/DeleteRounded";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
// import Refresh from '@material-ui/icons/Refresh';
import ViewColumn from "@material-ui/icons/ViewColumn";
// import Loop from "@material-ui/icons/Loop";
// import Settings from "@material-ui/icons/Settings";
// import SettingsPower from "@material-ui/icons/SettingsPowerRounded";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const staticItems = [
  {
    product: 1,
    dozens: 1,
    extraUnits: 0,
    notes: " sin obversación",
    subtotal: 0
  },
  {
    product: 2,
    dozens: 2,
    extraUnits: 0,
    notes: " sin obversación",
    subtotal: 850
  },
  { product: 3, dozens: 8, extraUnits: 3, notes: "", subtotal: 100 },
  { product: 4, dozens: 4, extraUnits: 1, notes: "", subtotal: 2500 },
  {
    product: 5,
    dozens: 6,
    extraUnits: 0,
    notes: " sin obversación",
    subtotal: 351
  }
];
const staticProducts = {
  1: "Muffin de chocolate",
  2: "Muffin de Vainilla",
  3: "Pizzetas",
  4: "Medialunas",
  5: "Conitos de dulce de leche"
};

const cellStyle = {
  paddingTop: "0.5rem",
  paddingRight: "1rem ",
  paddingBottom: "0.5rem",
  paddingLeft: "1rem",
  textAlign: "left"
};
const cellStyleSmall = {
  ...cellStyle,
  paddingRight: "0.5rem",
  paddingLeft: "2rem",
  textAlign: "left" //
};

const numericEditTextField = props => (
        <TextField
            value={props.value}
            fullWidth={false}
            onChange={e => props.onChange(e.target.value)}
            style={{textAlign:"left", width:"20%"}}
        />
    )

const stringEditTextField = props => (
    <TextField
    value={props.value}
    fullWidth={false}
    onChange={e => props.onChange(e.target.value)}
    style={{ textAlign: "left", width: "80%" }}
    />
);


const ItemsTable = () => {
  const [items, setItems] = useState(staticItems)
  
    return (
      <div className={classes.tableWrapper}>
          
        <MaterialTable
          style={classes.servicesTable}
          icons={tableIcons}
          title="Pedido #007"
          data={items}
       
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  // agregar lista de prods disponible para que sean uniques, sacar del dispo on add
                  setItems(prevItems => [...prevItems, newData]);

                  resolve();
                }, 500);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const index = items.findIndex(
                    ({ product }) => product === newData.product
                  );

                  setItems(prevItems => [
                    ...prevItems.slice(0, index),
                    newData,
                    ...prevItems.slice(index + 1)
                  ]);

                  resolve();
                }, 500);
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setItems(prevItems => [
                    ...prevItems.filter(
                      item => item.product !== oldData.product
                    )
                  ]);
                  resolve();
                }, 500);
              })
          }}
          columns={[
            {
              title: "Producto",
              field: "product",
              cellStyle: cellStyle,
              lookup: staticProducts
              
            },
            {
              title: "Docenas",
              field: "dozens",
              cellStyle: cellStyleSmall,
              editComponent: numericEditTextField
          
            },
            {
              title: "U. Extras",
              field: "extraUnits",
              cellStyle: cellStyleSmall,
              editComponent: numericEditTextField,

              customSort: (a, b) => a.extraUnits - b.extraUnits,
             
            },
            {
              title: "Notas",
              field: "notes",
              cellStyle: cellStyle,
              editComponent: stringEditTextField

            },
            {
              title: "Subtotal",
              field: "subtotal",
              cellStyle: cellStyleSmall,
              editComponent: stringEditTextField

            }
          ]}
          options={{
            toolbar: true,
            actionsColumnIndex: -1,
            showTitle: true,
            search: false,
            filtering: false,
            exportButton: false,
            grouping: false,
            pageSize: 10,
            pageSizeOptions: [5, 10, 20, 50],
            emptyRowsWhenPaging: false,
            exportAllData: true,
            headerStyle: {
              backgroundColor: "#9f27a7b7",
              color: "#fff",
              fontSize: "18px",
              textAlign: "left"
            }
           
          }}
        />
      </div>
    );
};

export default ItemsTable;
