import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Button } from '../../components/Button';

const units = ['bags', 'kg', 'cubic m', 'nos'];

export default function NewMaterialRequestScreen() {
  const router = useRouter();
  const [selectedUnit, setSelectedUnit] = useState('bags');
  const [materialName, setMaterialName] = useState('Cement');
  const [quantity, setQuantity] = useState('25');

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>New Material Request</Text>
        
        <View style={styles.form}>
          <Text style={styles.label}>Material Name</Text>
          <TextInput 
            style={styles.input}
            value={materialName}
            onChangeText={setMaterialName}
          />

          <Text style={styles.label}>Quantity</Text>
          <TextInput 
            style={styles.input}
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Unit</Text>
          <View style={styles.unitContainer}>
            {units.map((unit) => (
              <TouchableOpacity 
                key={unit}
                style={[styles.unitBtn, selectedUnit === unit && styles.unitBtnSelected]}
                onPress={() => setSelectedUnit(unit)}
              >
                <Text style={[styles.unitText, selectedUnit === unit && styles.unitTextSelected]}>
                  {unit}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.buttonRow}>
            <Button 
              title="Cancel" 
              variant="outline"
              onPress={() => router.back()}
              style={{ flex: 1 }}
            />
            <View style={{ width: 12 }} />
            <Button 
              title="Submit Request" 
              onPress={() => router.back()}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Dimmed background if used as transparent modal
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    minHeight: '70%',
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    color: Colors.text.primary,
    marginBottom: 24,
  },
  form: {
    backgroundColor: Colors.white,
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  label: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.secondary,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    padding: 16,
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 20,
  },
  unitContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  unitBtn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  unitBtnSelected: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
  },
  unitText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: Colors.text.primary,
  },
  unitTextSelected: {
    color: Colors.primary,
  },
  footer: {
    marginTop: 'auto',
    paddingTop: 24,
  },
  buttonRow: {
    flexDirection: 'row',
  },
});
