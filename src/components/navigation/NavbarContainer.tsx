import React from "react";
import Navbar from "./Navbar";

type Props = {};

export default function NavbarContainer({}: Props) {
  return (
    <div className="sticky">
      <Navbar />
    </div>
  );
}
