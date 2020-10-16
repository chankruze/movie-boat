/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 16 2020 12:52:08 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
// components
import Modal from "react-modal";
import ReactPlayer from "react-player/youtube";

// icons
import { VscChromeClose } from "react-icons/vsc";

// CSS
import modalStyles from "../../../ModalCommon.module.css";
import ytModalStyles from "./TrailerModal.module.css";

Modal.setAppElement("#react-root");

function TrailerModal(props) {
  const { ytTrailerCode, modalIsOpen, setModalIsOpen } = props;

  return (
    <Modal
      className={`${modalStyles.modal} ${ytModalStyles.modal}`}
      overlayClassName={modalStyles.modalOverlay}
      isOpen={modalIsOpen}
      contentLabel="Download Modal"
    >
      {/* Close Button */}
      <span className={`${modalStyles.close} ${ytModalStyles.close}`} onClick={() => setModalIsOpen(false)}>
        <VscChromeClose />
      </span>

      {/* YT Trailer Frame */}
      <ReactPlayer className={ytModalStyles.player} url={`https://www.youtube.com/watch?v=${ytTrailerCode}`} controls/>
    </Modal>
  );
}

export default TrailerModal;
