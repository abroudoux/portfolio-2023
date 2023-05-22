// React
import { MouseEvent, useState } from "react";

let [isMenuOpen, setIsMenuOpen] = useState(false);

function Menu(e: MouseEvent<HTMLSpanElement>) {
    setIsMenuOpen(!isMenuOpen);
};

function closeMenu() {
    setIsMenuOpen(false);
};