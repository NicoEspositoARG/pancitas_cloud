import React from 'react';

import MaterialTable from "material-table";
import classes from "./ItemsTable.css";


//import Table - Icons:
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
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
import RemoveCircle from "@material-ui/icons/DeleteRounded";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
// import Refresh from '@material-ui/icons/Refresh';
import ViewColumn from "@material-ui/icons/ViewColumn";
// import Loop from "@material-ui/icons/Loop";
import Settings from "@material-ui/icons/Settings";
import SettingsPower from "@material-ui/icons/SettingsPowerRounded";

const tableIcons = {
    Add: () => <AddBox />,
    Check: () => <Check />,
    Clear: () => <Clear />,
    Delete: () => <DeleteOutline />,
    DetailPanel: () => <ChevronRight />,
    Edit: () => <Edit />,
    Export: () => <SaveAlt />,
    Filter: () => <FilterList />,
    FirstPage: () => <FirstPage />,
    LastPage: () => <LastPage />,
    NextPage: () => <ChevronRight />,
    PreviousPage: () => <ChevronLeft />,
    ResetSearch: () => <Clear />,
    Search: () => <Search />,
    SortArrow: () => <ArrowUpward />,
    ThirdStateCheck: () => <Remove />,
    ViewColumn: () => <ViewColumn />
  };

const staticItems = [
    { product: "Muffin de chocolate", dozens: 1, extraUnits: 0, notes: " sin obversación", subtotal : 0},
    { product: "Muffin de Vainilla", dozens: 2, extraUnits: 0, notes: " sin obversación", subtotal : 850},
    { product: "Pizzetas", dozens: 8, extraUnits: 3, notes: "", subtotal : 100},
    { product: "Medialunas", dozens: 4, extraUnits: 1, notes: "", subtotal : 2500},
    { product: "Conitos de dulce de leche", dozens: 6, extraUnits: 0, notes: " sin obversación", subtotal : 351}

]


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
    textAlign: "center" //, backgroundColor:"#eee"
  };
  const headerStyleSmall = {
    ...cellStyleSmall,
    textAlign: "left"
  };

const ItemsTable = () => {
    return (
        <div className={classes.tableWrapper}>

        <MaterialTable
          style={classes.servicesTable}
        //   tableRef={this.tableRef}
          icons={tableIcons}
          columns={[
            {
                title: "Producto",
                field: "product",
                cellStyle: cellStyle,
                // headerStyle: headerStyleLarge,
                // customSort: (a, b) => a.client__cuic - b.client__cuic
              },
              {
                title: "Docenas",
                field: "dozens",
                cellStyle: cellStyleSmall,
                // headerStyle: headerStyleXL
              },
              {
                title: "U. Extras",
                field: "extraUnits",
                cellStyle: cellStyleSmall,
                // headerStyle: headerStyleLarge,
                // customSort: (a, b) => a - b
              },
              {
                title: "Notas",
                field: "notes",
                cellStyle: cellStyle,
                // headerStyle: headerStyleLarge,
                // customSort: (a, b) => a.id - b.id
              },
              {
                title: "Subtotal",
                field: "subtotal",
                cellStyle: cellStyleSmall,
                // headerStyle: headerStyleLarge,
                // customSort: (a, b) => a.id - b.id
              }
            ]}
              data = {staticItems}
            //   title="Services Dashboard"
              options={{
                toolbar:false,
                actionsColumnIndex: -1,
                showTitle: false,
                search: false,
                filtering: false,
                sorting: false,
                exportButton: false,
                grouping: false, //updatingService
                pageSize: 10,
                pageSizeOptions: [5, 10, 20, 50],
                emptyRowsWhenPaging: false,
                exportAllData: true,
                headerStyle: {
                  backgroundColor: "#9f27a7b7",
                  color: "#fff",
                //   fontFamily: "Oswald",
                //   fontWeight: 400,
                  fontSize: "18px",
                  textAlign: "center"
                },
                // rowStyle: {
                //   fontFamily: "Titillium Web"
                // }
              }}
              />
        </div>
            
    )

}

export default ItemsTable;