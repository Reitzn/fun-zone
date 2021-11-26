import React, { useState, useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { logout } from "../../firebase";
import { Link } from "react-router-dom";

export default function LogOut() {
  
    async function handleLogout() {
        try {
          await logout();
        } catch {
          alert("Error!");
        }
      }

  return (
    <>
      <Button variant="primary" onClick={handleLogout} as={Link} to="/">
        Log Out
      </Button>
    </>
  );
}
