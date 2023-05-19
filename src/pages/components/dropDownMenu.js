import React from "react";
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import showSuccessAlert from "./utility/showSuccessAlert";

const DropDownMenu = ({
  handleDelete,
  item,
  setChange,
  onEditComment,
  onCreateInteractions,
  setInteraction,
  setComment,
  comment = false,
  interaction = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleDeleteClick = async () => {
    try {
      const response = await handleDelete(item.contact_id, item._id);
      if (response.status) {
        setOpen(false);
        setChange(false);
        showSuccessAlert(response.message);
      } else {
        showErrorAlert("Something went wrong!");
        return;
      }
    } catch {
      console.log("detaed request failed");
    }
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const onEdit = () => {
    if (comment) {
      setComment(item);
      onEditComment();
    } else if (interaction) {
      onCreateInteractions();
      setInteraction(item);
    }
  };

  return (
    <>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        style={{ fontSize: "25px", color: "#fff" }}
        onClick={handleToggle}
      >
        ...
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
              backgroundColor: "#2B2B2B",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={onEdit}>
                    <ModeEditIcon />
                    <span style={{ marginLeft: "5px" }}>Edit</span>
                  </MenuItem>
                  <MenuItem
                    style={{ color: "red" }}
                    onClick={handleDeleteClick}
                  >
                    <DeleteIcon />
                    <span style={{ marginLeft: "5px" }}>Delete</span>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default DropDownMenu;