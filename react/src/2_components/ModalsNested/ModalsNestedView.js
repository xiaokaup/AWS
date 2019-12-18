import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalsNestedView = (props) => {
  const {
    id_button,
    buttonLabel,
    className,
    save
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  const save_and_toggleNested = () => {
    toggleNested();
    save();
  }

  const save_and_toggleAll = () => {
    toggleAll();
    save();
  }

  return (
    <div>
      <Button color="primary" onClick={toggle} id={id_button}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <h3>Are you want to modify the info of the hero?</h3>
          <br />
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody><h4>Are you confirm your decision?</h4></ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={save_and_toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={save_and_toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggleNested}>Show Nested Modal</Button>
          {/*<Button color="primary" onClick={toggle}>Do Something</Button>{' '}*/}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalsNestedView;