import "./App.css";
import { useState } from "react";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TodoList from "./TodoList";
import PropTypes from 'prop-types'; // Import PropTypes

function HomeContent() {
  return (
    <Typography variant="h3" gutterBottom>
      Todolist kotisivu!
    </Typography>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="">
        <Tab label="Home" />
        <Tab label="Todolist" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <HomeContent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TodoList />
      </TabPanel>
    </div>
  );
}

export default App;
