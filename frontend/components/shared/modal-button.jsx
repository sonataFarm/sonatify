import React from 'react';

const ModalButton = ({ text, modalId }) => (
  <button type="button" className="btn btn-primary btn-modal" data-toggle="modal" data-target={`#${modalId}`}>
    { text }
  </button>
);

export default ModalButton;
