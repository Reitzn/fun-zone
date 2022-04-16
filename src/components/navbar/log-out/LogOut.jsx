import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { logout } from "../../../firebase";
import { Link } from "react-router-dom";

export default function LogOut() {

  async function handleLogout() {
    try {
      await logout();
    } catch {
      // Look into firebase logs. 
    }
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={handleLogout}
        as={Link}
        to="/"
        data-testid="logout"
        style={{ margin: "0 5px" }}
      >
        Log Out
      </Button>
    </>
  );
}
