import { AppBar, Toolbar, Typography } from "@mui/material";
import { CreateToDo } from "../components/ToDo";

const Header = ({ todos, setTodos }) => {
  return (
    <AppBar sx={{ height: 60 }} color="secondary">
      <Toolbar>
        <Typography color="primary.text">ToDo list</Typography>
        <CreateToDo todos={todos} setTodos={setTodos} />
      </Toolbar>
    </AppBar>
  );
};

export { Header };
