import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';

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
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

const SearchBar = () => {
    const [data, setData] = useState();
    const [searchInput, setSearchInput] = useState('');
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const getBreed = async () => {
        const response = await fetch(`https://63d986dffa70b2008cecc180--unrivaled-snickerdoodle-869fcf.netlify.app/api/breed/${searchInput}`)
        const results = await response.json()
        setData(results[0].url)
        setOpen(true)
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    return (
        <div className='SearchBar'>
            <input
                className='Search'
                type="search"
                placeholder="Enter your breed ID"
                onChange={handleChange}
                value={searchInput} />
            <button onClick={getBreed}>Search</button>

            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {searchInput}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <img src={data} alt={data} width={500} height={500} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SearchBar;