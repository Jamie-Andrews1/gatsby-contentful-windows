import React, { useRef, useEffect } from "react";
import "../styles/home.module.scss";

export const Dialog = ({ content, set, isOpen }) => {
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    function handleClick(e) {
      if (ref.current.contains(e.target)) {
        return set(false);
      }
    }
    if (isOpen) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen, set]);

  return (
    <dialog open={true} ref={ref} style={{ backgroundColor: content.bgc }}>
      <p>{content.comment.status}</p>
      <p>{content.comment.errors ?? ""}</p>
    </dialog>
  );
};
