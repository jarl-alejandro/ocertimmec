import React, {Fragment} from 'react';
import {TextField, IconButton, List, ListItem, ListItemText, InputLabel, Box, Chip} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

function ListManager({ items, setItems, label }) {
    const handleAddItem = () => {
        setItems([...items, ""]);
    };

    const handleRemoveItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const handleChangeItem = (index, value) => {
        const newItems = [...items];
        newItems[index] = value;
        setItems(newItems);
    };

    return (
        <div style={{ marginBottom: '2rem' }}>
            <Box
                display="flex"
                alignItems="center"
                sx={{
                    marginBottom: '1rem'
                }}
            >
                <Chip
                    label={ label }
                    color="primary"
                    onDelete={handleAddItem}
                    deleteIcon={<Add />}
                />
            </Box>

            <List>
                {items.map((item, index) => (
                    <Fragment key={index}>
                        <ListItem>
                            <TextField
                                fullWidth
                                size="small"
                                value={item}
                                onChange={(e) => handleChangeItem(index, e.target.value)}
                                label={`${label} ${index + 1}`}
                            />
                            <IconButton onClick={() => handleRemoveItem(index)}>
                                <Delete />
                            </IconButton>
                        </ListItem>
                        <Divider />
                    </Fragment>
                ))}
            </List>

        </div>
    );
}

export default ListManager;
