/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 10 2020 15:30:17 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { useQuery } from "@apollo/client";
import querries from "../../../../../graphql";

import Modal from "react-modal";
import modalStyles from "../../../ModalCommon.module.css";
import pgModalStyles from "./ModalParentalGuide.module.css";
import { VscChromeClose } from "react-icons/vsc";

Modal.setAppElement("#react-root");

const ParentalGuide = (props) => {
  let divRef;
  let guides = null;
  const { movieId, modalIsOpen, setModalIsOpen } = props;

  // GET parental guides
  const { loading, error, data } = useQuery(querries.GQL_PARENTAL_GUIDES, {
    variables: { movie_id: parseInt(movieId) },
  });

  if (loading) {
  }

  if (error) {
  }

  if (data && data.parentalGuides) {
    console.log(data);
    guides = data.parentalGuides.parental_guides;
  }

  return (
    <Modal
      className={`${modalStyles.modal} ${pgModalStyles.modal}`}
      overlayClassName={modalStyles.modalOverlay}
      isOpen={modalIsOpen}
      contentLabel="Parental Guide Modal"
    >
      {/* Close Button */}
      <span className={modalStyles.close} onClick={() => setModalIsOpen(false)}>
        <VscChromeClose />
      </span>

      {/* Parental Guide Container */}
      <div>
        <h3 className={pgModalStyles.header}>Parental Guides</h3>
        {guides
          ? guides.map((guide) => (
              <p className={pgModalStyles.wrapper}>
                <b>{guide.type}: </b>
                {guide.parental_guide_text}
              </p>
            ))
          : ""}
      </div>
    </Modal>
  );
};

export default ParentalGuide;
