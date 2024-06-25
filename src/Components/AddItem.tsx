import React from 'react';
import {Modal, Portal, Text, Button, PaperProvider} from 'react-native-paper';

export default function AddItem() {
// eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (

  );
}
