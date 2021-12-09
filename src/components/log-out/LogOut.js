import React from "react";
import { Button } from "react-bootstrap";
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
      <Button variant="primary" onClick={handleLogout} as={Link} to="/" style={{ margin: '0 5px' }}>
        Log Out
      </Button>
    </>
  );
}
