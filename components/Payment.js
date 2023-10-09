
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Input, Icon, Button } from 'react-native-elements';

const PaymentForm = ({navigation}) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handlePayment = () => {
  
    setIsPaymentSuccessful(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Text style={styles.heading}>Payment Details</Text>
        <Input
          placeholder="Cardholder Name"
          value={name}
          onChangeText={(text) => setName(text)}
          leftIcon={<Icon name="user" type="font-awesome" />}
        />
        <Input
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          leftIcon={<Icon name="credit-card" type="font-awesome" />}
        />
        <Input
          placeholder="Expiry Date (MM/YY)"
          value={expiryDate}
          onChangeText={(text) => setExpiryDate(text)}
          leftIcon={<Icon name="calendar" type="font-awesome" />}
        />
        <Input
          placeholder="CVV"
          value={cvv}
          onChangeText={(text) => setCvv(text)}
          leftIcon={<Icon name="lock" type="font-awesome" />}
          secureTextEntry
        />
        <View style={styles.paymentMethods}>
          <Text>Select Payment Method:</Text>
          <View style={styles.methodIcons}>
            <Icon
              name="credit-card"
              type="font-awesome"
              onPress={() => setSelectedMethod('credit-card')}
              containerStyle={[
                styles.methodIcon,
                selectedMethod === 'credit-card' && styles.selectedMethod,
              ]}
            />
            <Icon
              name="bank"
              type="font-awesome"
              onPress={() => setSelectedMethod('net-banking')}
              containerStyle={[
                styles.methodIcon,
                selectedMethod === 'net-banking' && styles.selectedMethod,
              ]}
            />
            <Icon
              name="money"
              type="font-awesome"
              onPress={() => setSelectedMethod('upi')}
              containerStyle={[
                styles.methodIcon,
                selectedMethod === 'upi' && styles.selectedMethod,
              ]}
            />
          </View>
        </View>
        <Button title="Pay Now" onPress={()=>handlePayment(navigation.navigate("Prepare"))} />
        {isPaymentSuccessful && (
          <Text style={styles.successMessage}>Payment Successful!</Text>
        

        )}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  cardContainer: {
    margin: 10,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentMethods: {
    marginVertical: 20,
  },
  methodIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  methodIcon: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  selectedMethod: {
    backgroundColor: '#007bff',
    color: 'white',
  },
  successMessage: {
    marginTop: 20,
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentForm