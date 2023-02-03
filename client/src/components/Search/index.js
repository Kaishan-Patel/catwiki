import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        ></IconButton>
      ) : null}
    </DialogTitle>
  );
};

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/breeds");
      const result = await response.json();
      const newResult = [];
      // eslint-disable-next-line array-callback-return
      result.map((res) => {
        newResult.push({ id: res.id, name: res.name });
      });
      setData(newResult);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/breed/${selected}`);
      const results = await response.json();
      setUrl(results[0].url);
      setOpen(true);
    }

    fetchData();
  }, [selected]);

  const handleChange = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
  };

  return (
    <div className="SearchBar">
      <InputLabel id="cat-select-label">Select an option</InputLabel>
      <Select
        style={{ width: "200px" }}
        labelId="cat-select-label"
        id="cat-select"
        value={selected}
        onChange={handleChange}
      >
        {data &&
          data.map((value) => {
            return (
              <MenuItem key={value.id} value={value.id}>
                {value.name}
              </MenuItem>
            );
          })}
      </Select>

      <Dialog
        onClose={handleClose}
        aria-labelledby="cat-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="cat-dialog-title" onClose={handleClose}>
          {selected}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img src={url} alt={url} width={500} height={500} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchBar;
