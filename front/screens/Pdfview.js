import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView, Text } from 'react-native';
import PDFView from 'react-native-pdf';


const PdfViewerScreen = () => {
 

  return (
    <View style={styles.container}>
      <TextInput
      />
      <Button title="Buscar" onPress={handleSearch} />
      <ScrollView style={styles.pdfContainer}>
        <PDFView
        />
      </ScrollView>
    </View>
  );
};

export default PdfViewerScreen;
