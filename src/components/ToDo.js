import {
  Box,
  TextField,
  Stack,
  Button,
  Tooltip,
  Typography,
  InputAdornment
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SearchIcon from "@mui/icons-material/Search";
import { addToDo, resetToDos } from "../store/slices/ToDoSlice";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../store";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "date", headerName: "Date", width: 100 }
];

const ToDoList = () => {
  const todos = useSelector((state) => state.toDo.toDos);
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(resetToDos())
  }
  return (
    <div style={{ height: "84vh", width: "100%", marginTop: 70 }}>
      <DataGrid
        sx={{ mt: 1 }}
        rows={todos}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[10, 15]}
        checkboxSelection
      />
      <Button onClick={handleClick}>reset</Button>
    </div>
  );
      }

export { ToDoList };

const FilterToDo = ({ todos, setFilteredTodos }) => {
  const [filter, setFilter] = useState("");
  const filterToDos = () => {
    let filteredTodos = todos.filter((todo) => todo.title === filter);
    setFilteredTodos(filter === "" ? todos : filteredTodos);
  };
  useEffect(() => {
    filterToDos();
  }, [filter, todos]);
  return (
    <TextField
      sx={{ my: 2, width: "100%" }}
      label="Filter"
      onChange={(e) => setFilter(e.target.value)}
      value={filter}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {filter && (
              <Button>
                <HighlightOffIcon onClick={() => setFilter("")} />
              </Button>
            )}
          </InputAdornment>
        )
      }}
    />
  );
};

export { FilterToDo };

const CreateToDo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch()  
  const handleClick = () => {
    const newToDo = {
      title: title,
      date: date
    };
    dispatch(addToDo(newToDo))
    setTitle("")
    setDate("")
  };

  return (
    <Box
      sx={{
        width: "80%",
        height: 50,
        mx: "auto",
        my: 9
      }}
    >
      <Stack direction="row" spacing={2}>
        <Tooltip arrow title={<Typography>add a ToDo item</Typography> }>
          <Button
            variant="outlined"
            onClick={handleClick}
            disabled={title==="" || date===""}
            color="inherit"
          >
            Add
          </Button>
        </Tooltip>
        <TextField
          size="small"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {title !=="" && (
                  <Button>
                    <HighlightOffIcon onClick={() => setTitle("")} />
                  </Button>
                )}
              </InputAdornment>
            )
          }}
        />
        <TextField
          size="small"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button>Useless button</Button>
      </Stack>
    </Box>
  );
};

export { CreateToDo };
