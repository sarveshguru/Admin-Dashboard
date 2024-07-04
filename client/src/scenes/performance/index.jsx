// import React from "react";
// import { Box, useTheme } from "@mui/material";
// import { useGetUserPerformanceQuery } from "state/api";
// import { useSelector } from "react-redux";
// import { DataGrid } from "@mui/x-data-grid";
// import Header from "../../components/Header";
// import CustomColumnMenu from "../../components/DataGridCustomColumnMenu";

// const Performance = () => {
//   const theme = useTheme();
//   const userId = useSelector((state) => state.global.userid);
//   const { data, isLoading } = useGetUserPerformanceQuery(userId);
//   console.log(data);

//   const columns = [
//     {
//       field: "_id",
//       headerName: "ID",
//       flex: 1,
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 0.5,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "phoneNumber",
//       headerName: "Phone Number",
//       flex: 0.5,
//       renderCell: (params) => {
//         return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
//       },
//     },
//     {
//       field: "country",
//       headerName: "Country",
//       flex: 0.4,
//     },
//     {
//       field: "occupation",
//       headerName: "Occupation",
//       flex: 1,
//     },
//     {
//       field: "role",
//       headerName: "Role",
//       flex: 0.5,
//     },
//   ];

//   return (
//     <Box m="1.5rem 2.5rem">
//       <Header title="ADMINS" subtitle="Managing admins and list of admins" />
//       {/* <Box
//         mt="40px"
//         height="70vh"
//         width="100%"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
//             backgroundColor: `${theme.palette.background.alt} !important`,
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             color: theme.palette.secondary[100],
//             backgroundColor: theme.palette.background.alt,
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: theme.palette.primary.light,
//           },
//           "& .MuiDataGrid-footerContainer": {
//             backgroundColor: theme.palette.background.alt,
//             color: theme.palette.secondary[100],
//             borderTop: "none",
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${theme.palette.secondary[200]} !important`,
//           },
//         }}
//       >
//         <DataGrid
//           loading={isLoading || !data}
//           getRowId={(row) => row._id}
//           rows={data || []}
//           columns={columns}
//           slots={{
//             columnMenu: CustomColumnMenu,
//           }}
//         />
//       </Box> */}
//     </Box>
//   );
// };

// export default Performance;
